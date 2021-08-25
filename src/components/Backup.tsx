import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { MainBox } from './styled';

async function backup(token: string, name) {
	// create new playlist with name and description
	// fetch all playlists and filter for new one
	// get new playlist
	// get discover weekly playlists
	// add all songs from discover weekly to the new playlist
}

function getPlaylistByName() {}
async function fetchAllPlaylists(token: string) {}
async function createNewPlaylist(token: string) {}
async function addSongToPlaylist(token: string) {}

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

const Backup: Component<{ token: string }> = ({ token }) => {
	const [backupName, setBackupName] = createSignal('');

	return (
		<MainBox>
			<h1>Save your Discover Weekly</h1>
			<h2>Name of backup</h2>
			<form
				onSubmit={(_form) => {
					if (backupName() != '') backup(token, backupName());
				}}>
				<Input
					type="text"
					required={true}
					onInput={(e: Event) => setBackupName(e.target.value)}
					value={backupName()}
				/>
				<Button type="submit">Backup Your Discover weekly</Button>
			</form>
		</MainBox>
	);
};

export default Backup;
