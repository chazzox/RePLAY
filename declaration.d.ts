import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: { main: string };
	}
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
