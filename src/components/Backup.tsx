import type { Component } from 'solid-js';
import { onMount, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';

const Playlist = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.green};
	margin: 45px;
	padding: 8px;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
	padding-bottom: 25px;
	& > img {
		height: 150px;
	}
`;

const Backup: Component<{ token: string }> = ({ token }) => {
	const [playlists, setPlaylists] = createSignal([]);
	onMount(() => {
		const requestURL = new URL('https://api.spotify.com/v1/me/playlists');
		fetch(requestURL.toString(), { method: 'GET', headers: { Authorization: 'Bearer ' + token } })
			.then((req) => req.json())
			.then((playlists) => setPlaylists(playlists.items));
	});
	return (
		<div>
			{playlists().map((playlist) => (
				<Playlist>
					<h3>{playlist.name}</h3>
					{playlist.images.length > 0 && <img src={playlist.images[0].url} alt="" />}
				</Playlist>
			))}
		</div>
	);
};

export default Backup;
