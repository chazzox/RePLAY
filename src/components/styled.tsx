import { styled } from 'solid-styled-components';

export const MainBox = styled('div')`
	background-color: ${(props) => props.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;
