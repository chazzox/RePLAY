import { styled, createGlobalStyles } from 'solid-styled-components';

export const MainBox = styled('div')`
	background-color: ${(props) => props.theme.white};
	border-radius: 12px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
		rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
	display: flex;
	width: calc(100vw - 30px);
	max-width: 900px;
	min-height: 400px;
	overflow: hidden;
	margin-top: 12px;
`;

export const LoginLink = styled('a')`
	display: block;
	background-color: ${(props) => props.theme.green};
	color: ${(props) => props.theme.white};
	text-decoration: none;
	padding: 8px 24px;
	border-radius: 999px;
	transition: background-color 0.2s ease;
	font-size: 13pt;
	font-weight: 600;
	white-space: nowrap;
	width: calc(100% - 32px);
	text-align: left;
	margin-top: 32px;
	&:hover {
		background-color: ${(props) => props.theme.secondaryGreen};
	}
`;

export const Input = styled('input')`
	display: block;
	margin: 10px auto;
	background-color: ${(props) => props.theme.black};
	color: ${(props) => props.theme.black};
	border: none;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;

	transition: background-color 0.2s ease;
	&:focus {
		background-color: ${(props) => props.theme.green};
		color: ${(props) => props.theme.black};
	}
`;

export const Button = styled('button')`
	display: block;
	margin: auto;
	font-size: 15px;
	background-color: ${(props) => props.theme.green};
	color: ${(props) => props.theme.white};
	border: none;
	border-radius: 8px;
	padding: 8px;
	transition: background-color 0.2s ease;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.secondaryGreen};
	}
`;

export const Global = createGlobalStyles`
	* {
		font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
		color: ${(props) => props.theme.black};
	}
	h1 {
		color: ${(props) => props.theme.white};
	}
	body {
		margin: 0;
		padding: 0;
		background-color: #1a1a1e;
	}
	html,
	body,
	#root {
		height: 100%;
	}
	.green {
		color: ${(props) => props.theme.green};
	}
	#mainContent, #sidebar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#sidebar {
		background-color: ${(props) => props.theme.offWhite};
		width: 40%;
		padding: 12px;
		flex-shrink: 0;
	}
	#mainContent {
		padding: 12px;
		width: 100%;
	}
	.backgroundNote {
		position: fixed;
		z-index: -99;
		width: 30vw;
		height: 30vw;
		&:first-of-type {
			left: 70vw;
			top: 45vh;
			transform: rotate(5deg);
		}
		&:last-of-type {
			width: 20vw;
			height: 20vw;
			left: 0;
			top: 5vh;
			transform: rotate(-2deg);
		}	
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

export const Message = styled('div')`
	@keyframes slideDown {
		0% {
			top: -32px;
			opacity: 0;
		}
		5% {
			top: 15px;
			opacity: 1;
		}
		65% {
			top: 15px;
			opacity: 1;
		}
		100% {
			top: -32px;
			opacity: 0;
		}
	}
	animation: 2s cubic-bezier(0.68, -0.6, 0.32, 1.6) slideDown;
	transform: translateX(-50%);
	border-radius: 8px;
	position: fixed;
	padding: 5px 10px;
	left: 50%;
	top: -32px;
	opacity: 0;
`;

export const ErrorBox = styled(Message)`
	background-color: #cc1a2b;
`;
