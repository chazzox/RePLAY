import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import { Error } from './styled';

import { MainBox, Button, Input, Title, Subtitle } from './styled';

async function getUserId(token: string) {
	const result = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	const jsonResponse = await result.json();
	return jsonResponse.id;
}

async function createNewPlaylist(token: string, userId: string, name: string) {
	const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token },
		body: JSON.stringify({ name: name, description: 'New playlist description', public: false })
	});
	const jsonResponse = await result.json();
	return jsonResponse.id;
}

async function getPlaylistByName(token, name) {
	const userPlaylists = await fetchAllPlaylists(token);
	for (const item in userPlaylists) if (userPlaylists[item].name === name) return userPlaylists[item];
	return '';
}

async function fetchAllPlaylists(token: string) {
	/** @todo: there is a possibility that the user will have more then 50 playlists */
	const res = await fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	const jsonResponse = await res.json();
	return jsonResponse.items;
}

async function getTrackList(token: string, url: string) {
	const res = await fetch(url, {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	const jsonResponse = await res.json();
	return jsonResponse.items;
}

async function addSongs(token: string, playlistId: string, songs: string[]) {
	const requestUrl = new URL(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`);
	requestUrl.searchParams.append('uris', songs.join());
	const response = await fetch(requestUrl.toString(), {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token }
	});
	return await response.json();
}

const Backup: Component<{ token: string }> = ({ token }) => {
	const [backupName, setBackupName] = createSignal('');
	const [backupSuccess, setBackupSuccess] = createSignal<boolean>(false);
	const [error, setError] = createSignal('');

	const SetError = (errorString: string) => {
		setError(errorString);
		setTimeout(() => {
			setError('');
		}, 2000);
	};

	/**
	 * @todo error detection
	 */
	async function backup(token: string, name: string) {
		// get userId
		const userId = await getUserId(token);

		// create new playlist with name and description, and return Id
		const newBackup = await createNewPlaylist(token, userId, name);

		// get discover weekly playlists
		const discoverWeekly = await getPlaylistByName(token, 'Discover Weekly');
		if (discoverWeekly === '') {
			SetError('Could not find discover weekly playlist');
			return 1;
		}

		// get song list
		const tracklist = await getTrackList(token, discoverWeekly.tracks.href);

		// add all songs from discover weekly to the new playlist
		const addSongResponse = await addSongs(
			token,
			newBackup,
			tracklist.map((element) => element.track.uri)
		);
		if ('snapshot_id' in addSongResponse) {
			setBackupSuccess(true);
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
			{error() !== '' && <Error>{error()}</Error>}
		</MainBox>
	);
};

export default Backup;
