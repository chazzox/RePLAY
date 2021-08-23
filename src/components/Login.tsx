import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import { MainBox } from './styled';

const LoginLink = styled('a')`
	background-color: white;
	color: black;
	text-decoration: none;
	padding: 8px;
	border-radius: 8px;
	transition: background-color 0.2s ease;
	&:hover {
		background-color: ${(props) => props.theme.black};
		color: white;
	}
`;

function generateAuthURL() {
	const authURL = new URL('https://accounts.spotify.com/authorize');
	authURL.searchParams.append('show_dialog', 'true');
	authURL.searchParams.append('response_type', 'token');
	authURL.searchParams.append('client_id', 'b487c0ac409c4b4aba8703323c9e8305');
	authURL.searchParams.append('redirect_uri', 'http://localhost:3000/replay/');
	authURL.searchParams.append(
		'scope',
		['playlist-modify-private', 'playlist-read-private', 'playlist-modify-public'].join(' ')
	);
	return authURL.toString();
}

const Login: Component = () => {
	return (
		<MainBox>
			<h3>Sign in to spotify and backup this weeks discover weekly!</h3>
			<LoginLink href={generateAuthURL()}>Login to spotify</LoginLink>
		</MainBox>
	);
};

export default Login;
