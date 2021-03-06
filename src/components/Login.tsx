import type { Component } from 'solid-js';
import { LoginLink, Subtitle, Text } from './styled';

function generateAuthURL() {
	console.log(import.meta.env);
	const authURL = new URL('https://accounts.spotify.com/authorize');
	authURL.searchParams.append('show_dialog', 'true');
	authURL.searchParams.append('response_type', 'token');
	authURL.searchParams.append('client_id', import.meta.env.VITE_CLIENT_ID);
	authURL.searchParams.append('redirect_uri', import.meta.env.VITE_REDIRECT_URI);
	authURL.searchParams.append(
		'scope',
		['playlist-modify-private', 'playlist-read-private', 'playlist-modify-public'].join(' ')
	);
	return authURL.toString();
}

const Login: Component = () => {
	return (
		<div id="mainContent">
			<Subtitle>Backup this weeks discover weekly!</Subtitle>
			<Text>You must be following your discover weekly for this tool to work.</Text>
			<LoginLink href={generateAuthURL()}>Login to Spotify</LoginLink>
		</div>
	);
};

export default Login;

