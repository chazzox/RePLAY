import type { Component } from 'solid-js';
import { onMount, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';

import Login from './components/Login';
import Backup from './components/Backup';

const ContentContainer = styled('div')`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const App: Component = () => {
	const [accessToken, setAccessToken] = createSignal('');
	onMount(() => {
		const hashObject = Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());
		if (hashObject.access_token) {
			setAccessToken(hashObject.access_token);
			window.location.hash = '';
		}
	});
	return (
		<>
			{accessToken() === '' ? (
				<ContentContainer>
					<Login />
				</ContentContainer>
			) : (
				<Backup token={accessToken()} />
			)}
		</>
	);
};

export default App;
