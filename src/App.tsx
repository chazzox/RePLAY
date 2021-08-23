import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

const ContentContainer = styled('div')`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const MainBox = styled('div')`
	background-color: ${(props) => props.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

const Login = styled('a')`
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

const App: Component = () => {
	return (
		<ContentContainer>
			<MainBox>
				<h3>Sign in to spotify and backup this weeks discover weekly!</h3>
				<Login href="">Login to spotify</Login>
			</MainBox>
		</ContentContainer>
	);
};

export default App;
