import { render } from 'solid-js/web';
import { ThemeProvider } from 'solid-styled-components';
import { onMount, createSignal } from 'solid-js';
import Cookies from 'js-cookie';

import { Global, ContentContainer } from './components/styled';
import Login from './components/Login';
import Backup from './components/Backup';

interface ReturnType {
	access_token: string;
	token_type: 'Bearer';
	expires_in: string;
}

render(() => {
	const [accessToken, setAccessToken] = createSignal('');
	onMount(() => {
		if (document.cookie && window.location.hash === '') {
			if (parseInt(Cookies.get('expiry')) > Date.now()) {
				setAccessToken(Cookies.get('access_token'));
			}
		}

		const hashObject = Object.fromEntries(
			new URLSearchParams(document.location.hash.slice(1)).entries()
		) as unknown as ReturnType;

		if (hashObject.access_token) {
			setAccessToken(hashObject.access_token);
			Cookies.set('access_token', hashObject.access_token);
			Cookies.set('expiry', String(Date.now() + parseInt(hashObject.expires_in) * 1000));
			window.location.hash = '';
		}
	});
	return (
		<ThemeProvider
			theme={{
				black: '#121212',
				green: '#1db954',
				secondaryGreen: '#15883e',
				white: '#ffffff',
				secondaryBlack: '#181818'
			}}>
			<Global />
			<ContentContainer>{accessToken() === '' ? <Login /> : <Backup token={accessToken()} />}</ContentContainer>
		</ThemeProvider>
	);
}, document.getElementById('root'));
