import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		green: string;
		black: string;
	}
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
