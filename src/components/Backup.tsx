import type { Component } from 'solid-js';
import { onMount, createSignal, createEffect } from 'solid-js';
import { styled } from 'solid-styled-components';

const Playlist = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > img {
		height: 150px;
	}
`;

const Song = styled('div')`
	display: flex;
	background-color: ${(props) => props.theme.green};
	padding: 15px;
	margin: 15px;
	border-radius: 8px;
	& > img {
		height: 50px;
		margin-left: 15px;
	}
`;

const Backup: Component<{ token: string }> = ({ token }) => {
	const [discoverWeekly, setDiscoverWeekly] = createSignal({ name: '', images: [], id: '' });
	const [songList, setSongList] = createSignal([]);

	onMount(() => {
		fetch('https://api.spotify.com/v1/me/playlists', {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token }
		})
			.then((req) => req.json())
			.then((playlists) => setDiscoverWeekly(playlists.items.filter((temp) => temp.name === 'Discover Weekly')[0]));
	});

	createEffect(() => {
		discoverWeekly().id !== '' &&
			fetch(`https://api.spotify.com/v1/playlists/${discoverWeekly().id}/tracks`, {
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			})
				.then((req) => req.json())
				.then((songListTemp) => setSongList(songListTemp.items));
	});

	return (
		<div>
			<Playlist>
				<h1>{discoverWeekly().name}</h1>
				{discoverWeekly().images.length > 0 && <img src={discoverWeekly().images[0].url} alt="" />}
				<p>No. of Songs: {songList().length}</p>
				{songList().map((song) => (
					<Song>
						<p>{song.track.name}</p>
						<img src={song.track.album.images[0].url} alt="" />
					</Song>
				))}
			</Playlist>
		</div>
	);
};

export default Backup;
