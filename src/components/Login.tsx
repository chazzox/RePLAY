import type { Component } from 'solid-js';

import { MainBox, LoginLink, Title, Subtitle, Text } from './styled';

function generateAuthURL() {
	const authURL = new URL('https://accounts.spotify.com/authorize');
	authURL.searchParams.append('show_dialog', 'true');
	authURL.searchParams.append('response_type', 'token');
	authURL.searchParams.append('client_id', import.meta.env.VITE_API_TOKEN);
	authURL.searchParams.append('redirect_uri', import.meta.env.VITE_REDIRECT_URI);
	authURL.searchParams.append(
		'scope',
		['playlist-modify-private', 'playlist-read-private', 'playlist-modify-public'].join(' ')
	);
	return authURL.toString();
}

const Login: Component = () => {
	return (
		<>
			<img className="backgroundNote" src="./music-note.png"></img>
			<Title>
				Re<span className="green">PLAY</span>
			</Title>
			<MainBox>
				<div id="mainContent">
					<Subtitle>Backup this weeks discover weekly!</Subtitle>
					<Text>You must be following your discover weekly for this tool to work.</Text>
					<LoginLink href={generateAuthURL()}>Login to Spotify</LoginLink>
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

export default Login;
