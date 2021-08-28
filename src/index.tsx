import { render } from 'solid-js/web';
import { styled, ThemeProvider, createGlobalStyles } from 'solid-styled-components';
import { onMount, createSignal } from 'solid-js';

import Login from './components/Login';
import Backup from './components/Backup';

const Global = createGlobalStyles`
	* {
		font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
		color: white;
	}
	body {
		margin: 0;
		padding: 0;
		background-color: ${(props) => props.theme.black};
	}
	html,
	body,
	#root {
		height: 100%;
	}
`;
const ContentContainer = styled('div')`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

render(() => {
	const [accessToken, setAccessToken] = createSignal('');
	onMount(() => {
		const hashObject = Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());
		if (hashObject.access_token) {
			setAccessToken(hashObject.access_token);
			window.location.hash = '';
		}
	});
	return (
		<ThemeProvider theme={{ black: '#191414', green: '#1db954' }}>
			<Global />
			<ContentContainer>{accessToken() === '' ? <Login /> : <Backup token={accessToken()} />}</ContentContainer>
		</ThemeProvider>
	);
}, document.getElementById('root'));
