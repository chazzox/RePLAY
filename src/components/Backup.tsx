import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import { MainBox, Button, Input, Title, Text, Subtitle, ErrorBox } from './styled';

const statusCodeSuccess = [200, 201];

async function getUserId(token: string) {
	const result = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	if (!statusCodeSuccess.includes(result.status)) throw Error('Creating new playlist was unsuccessful');
	const jsonResponse = (await result.json()) as UserInfo;
	return jsonResponse.id;
}

async function createNewPlaylist(token: string, userId: string, name: string) {
	const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token },
		body: JSON.stringify({ name: name, description: 'New playlist description', public: false })
	});
	if (!statusCodeSuccess.includes(result.status)) throw Error('Creating new playlist was unsuccessful');
	const jsonResponse = (await result.json()) as Playlist;

	return jsonResponse.id;
}

async function getPlaylistByName(token, name) {
	const userPlaylists = await fetchAllPlaylists(token);
	for (const item in userPlaylists) if (userPlaylists[item].name === name) return userPlaylists[item];
	throw Error('Could not find Discover weekly playlist in followed playlists');
}

async function fetchAllPlaylists(token: string) {
	const playlists: Playlist[] = [];
	let next = 'https://api.spotify.com/v1/me/playlists?limit=50';
	// fetch until we know that the user has no more playlists
	while (next) {
		const res = await fetch(next, {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token }
		});
		if (!statusCodeSuccess.includes(res.status)) throw Error('Playlist fetch Unsuccessful');
		const jsonResponse = (await res.json()) as AllPlaylists;
		playlists.push(...jsonResponse.items);
		next = jsonResponse.next;
	}

	return playlists;
}

async function getTrackList(token: string, url: string) {
	// since we know that discover weekly playlists are 30 songs max, there is no need to check if we need to refetch
	const res = await fetch(url, {
		method: 'GET',
		headers: { Authorization: 'Bearer ' + token }
	});
	const jsonResponse = (await res.json()) as Tracklist;

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
		<>
			<img className="backgroundNote" src="./music-note.png"></img>
			<img className="backgroundNote" src="./music-note.png"></img>
			<img className="backgroundNote" src="./music-note.png"></img>
			<Title>
				Re<span className="green">PLAY</span>
			</Title>
			<MainBox>
				<div id="mainContent">
					{!backupSuccess() ? (
						<>
							<h2>Save your Discover Weekly</h2>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									if (backupName() != '') backup(token, backupName());
								}}>
								<div id="formHeader">Name your Backup:</div>
								<Input
									type="text"
									required={true}
									placeholder="New Playlist Name"
									// debouncing is needed
									onInput={(e: any) => {
										setBackupName(e.target.value);
									}}
									value={backupName()}
								/>
								<Button type="submit">Backup Now</Button>
							</form>
						</>
					) : (
						<>
							<h2>Success!</h2>
							<Subtitle>Discover Weekly has been saved</Subtitle>
						</>
					)}
					{error() !== '' && <ErrorBox>{error()}</ErrorBox>}
				</div>
				<div id="sidebar">
					<Subtitle>What is RePLAY?</Subtitle>
					<Text>Replay is a a simplistic tools that backups your discover weekly at the press of a button!</Text>
					<Text>
						For those times you find yourself frequently forgetting to listen to the whole of it and the clock is
						ticking towards midnight on the final day.
					</Text>
				</div>
			</MainBox>
		</>
	);
};

export default Backup;
