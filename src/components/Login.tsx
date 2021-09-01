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
		<MainBox>
			<Title>REPLAY</Title>
			<Subtitle>What is replay?</Subtitle>
			<Text>• Replay is a a simplistic tools that backups your discover weekly at the press of a button!</Text>
			<Text>
				• This can be useful if you find yourself frequently forgetting to listen to the whole of it and the clock is
				ticking towards midnight on the final day
			</Text>
			<Text>• Note: You must be following your discover weekly for this tool to work</Text>
			<Subtitle>Sign in to spotify and backup this weeks discover weekly!</Subtitle>
			<LoginLink href={generateAuthURL()}>Login to spotify</LoginLink>
		</MainBox>
	);
};

export default Login;
