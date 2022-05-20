import { render } from 'solid-js/web';
import { ThemeProvider } from 'solid-styled-components';
import { onMount, createSignal } from 'solid-js';
import Cookies from 'js-cookie';

import { Global, ContentContainer, MainBox, Title, Subtitle, Text } from '../components/styled';
import Login from '../components/Login';
import Backup from '../components/Backup';

import MusicNote from '../assets/music-note.png';

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
			history.pushState('', document.title, window.location.pathname + window.location.search);
		}
	});

	return (
		<ThemeProvider
			theme={{
				black: '#172228',
				gray: '#dadae2',
				green: '#1db954',
				secondaryGreen: '#15883e',
				white: '#ffffff',
				offWhite: '#f9f5f2',
				secondaryBlack: '#181818'
			}}>
			<Global />
			<ContentContainer>
				<img className="backgroundNote" src={MusicNote}></img>
				<img className="backgroundNote" src={MusicNote}></img>
				<img className="backgroundNote" src={MusicNote}></img>
				<Title>
					Re<span className="green">PLAY</span>
				</Title>
				<MainBox>
					{accessToken() === '' ? <Login /> : <Backup token={accessToken()} />}
					<div id="sidebar">
						<Subtitle>What is RePLAY?</Subtitle>
						<Text>
							Replay is a simple tool that lets you backup your discover weekly playlist at the press of a
							button!
						</Text>
						<Text>
							For those times you find yourself frequently forgetting to listen to the whole of it and the
							clock is ticking towards midnight on the final day.
						</Text>
					</div>
				</MainBox>
			</ContentContainer>
		</ThemeProvider>
	);
}, document.getElementById('root'));
