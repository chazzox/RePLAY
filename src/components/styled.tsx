import { styled, createGlobalStyles } from 'solid-styled-components';

export const MainBox = styled('div')`
	background-color: ${(props) => props.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;

export const LoginLink = styled('a')`
	display: block;
	width: 40%;
	margin: auto;
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

export const Input = styled('input')`
	display: block;
	margin: 10px auto;
	background-color: ${(props) => props.theme.black};
	border: none;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
`;

export const Button = styled('button')`
	display: block;
	margin: auto;
	font-size: 15px;
	background-color: white;
	color: black;
	border: none;
	border-radius: 8px;
	padding: 8px;
	transition: background-color 0.2s ease;
	cursor: pointer;
	&:hover {
		color: white;
		background-color: ${(props) => props.theme.black};
	}
`;

export const Global = createGlobalStyles`
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

export const ContentContainer = styled('div')`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled('h1')`
	font-weight: 900;
	padding: 5px;
	margin: 5px;
	font-size: 35px;
`;

export const Subtitle = styled('h3')`
	font-weight: 600;
	font-size: 25px;
	padding: 5px;
	margin: 5px;
`;

export const Text = styled('p')`
	font-weight: 400;
	margin: 5px;
`;
