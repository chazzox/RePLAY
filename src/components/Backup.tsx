import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { MainBox } from './styled';

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
}

async function fetchAllPlaylists(token: string) {
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
	fetch(requestUrl.toString(), {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token }
	});
}

async function backup(token: string, name: string) {
	// get userId
	const userId = await getUserId(token);
	// create new playlist with name and description, and return Id
	const newBackup = await createNewPlaylist(token, userId, name);
	// get discover weekly playlists
	const discoverWeekly = await getPlaylistByName(token, 'Discover Weekly');
	// get song list
	const tracklist = await getTrackList(token, discoverWeekly.tracks.href);
	// add all songs from discover weekly to the new playlist
	addSongs(
		token,
		newBackup,
		tracklist.map((element) => element.track.uri)
	);
}

const Input = styled('input')`
	display: block;
	margin: 10px auto;
	background-color: ${(props) => props.theme.black};
	border: none;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
`;

const Button = styled('button')`
	display: block;
	margin: auto;
	font-size: 15px;
	background-color: white;
	color: black;
	border: none;
	border-radius: 8px;
	padding: 8px;
	transition: background-color 0.2s ease;
	cursor: pointer;
	&:hover {
		color: white;
		background-color: ${(props) => props.theme.black};
	}
`;

const CheckBox = styled('input')``;

const Backup: Component<{ token: string }> = ({ token }) => {
	const [backupName, setBackupName] = createSignal('');
	return (
		<MainBox>
			<h1>Save your Discover Weekly</h1>
			<h2>Name of backup</h2>
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
				{/* <CheckBox type="checkbox" /> */}
				<Button type="submit">Backup Your Discover weekly</Button>
			</form>
		</MainBox>
	);
};

export default Backup;
