import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const statusCodeSuccess = [200, 201];

import { MainBox, Button, Input, Title, Subtitle, ErrorBox } from './styled';

async function getUserId(token: string) {
	const result = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	if (!statusCodeSuccess.includes(result.status)) throw Error('Creating new playlist was unsuccessful');
	const jsonResponse = await result.json();
	return jsonResponse.id;
}

async function createNewPlaylist(token: string, userId: string, name: string) {
	const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token },
		body: JSON.stringify({ name: name, description: 'New playlist description', public: false })
	});
	if (!statusCodeSuccess.includes(result.status)) throw Error('Creating new playlist was unsuccessful');
	const jsonResponse = await result.json();
	return jsonResponse.id;
}

async function getPlaylistByName(token, name) {
	const userPlaylists = await fetchAllPlaylists(token);
	for (const item in userPlaylists) if (userPlaylists[item].name === name) return userPlaylists[item];
	throw Error('Could not find Discover weekly playlist in followed playlists');
}

async function fetchAllPlaylists(token: string) {
	/** @todo: there is a possibility that the user will have more then 50 playlists */
	const res = await fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	if (!statusCodeSuccess.includes(res.status)) throw Error('Playlist fetch Unsuccessful');
	const jsonResponse = await res.json();
	return jsonResponse.items;
}

async function getTrackList(token: string, url: string) {
	const res = await fetch(url, {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	const jsonResponse = await res.json();
	if (!statusCodeSuccess.includes(res.status)) throw Error('Fetching Discover weekly tracklist failed');
	return jsonResponse.items;
}

async function addSongs(token: string, playlistId: string, songs: string[]) {
	const requestUrl = new URL(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`);
	requestUrl.searchParams.append('uris', songs.join());
	const response = await fetch(requestUrl.toString(), {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token }
	});
	if (!statusCodeSuccess.includes(response.status)) throw Error('Adding songs failed');
}

const Backup: Component<{ token: string }> = ({ token }) => {
	const [backupName, setBackupName] = createSignal('');
	const [backupSuccess, setBackupSuccess] = createSignal<boolean>(false);
	const [error, setError] = createSignal('');

	const SetError = (errorString: string) => {
		setError('');
		setError(errorString);
	};

	async function backup(token: string, name: string) {
		try {
			// get userId
			const userId = await getUserId(token);
			// get discover weekly playlists
			const discoverWeekly = await getPlaylistByName(token, 'Discover Weekly');
			// get song list
			const tracklist = await getTrackList(token, discoverWeekly.tracks.href);
			// create new playlist with name and description, and return Id
			const newBackup = await createNewPlaylist(token, userId, name);
			// add all songs from discover weekly to the new playlist
			await addSongs(
				token,
				newBackup,
				tracklist.map((element) => element.track.uri)
			);
			setBackupSuccess(true);
		} catch (e) {
			SetError(e.message);
		}
	}

	return (
		<MainBox>
			<Title>Save your Discover Weekly</Title>
			{!backupSuccess() ? (
				<>
					<Subtitle>Name of backup</Subtitle>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (backupName() != '') backup(token, backupName());
						}}>
						<Input
							type="text"
							required={true}
							onInput={(e) => {
								// @ts-expect-error
								setBackupName(e.target.value);
							}}
							value={backupName()}
						/>
						<Button type="submit">Backup Your Discover weekly</Button>
					</form>
				</>
			) : (
				<Subtitle>Discover weekly has been saved</Subtitle>
			)}
			{error() !== '' && <ErrorBox>{error()}</ErrorBox>}
		</MainBox>
	);
};

export default Backup;
