import { render } from 'solid-js/web';
import { ThemeProvider, createGlobalStyles } from 'solid-styled-components';
import App from './App';

const Global = createGlobalStyles`
	* {
		font-family: circular;
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

render(
	() => (
		<ThemeProvider theme={{ black: '#191414', green: '#1db954' }}>
			<Global />
			<App />
		</ThemeProvider>
	),
	document.getElementById('root')
);
