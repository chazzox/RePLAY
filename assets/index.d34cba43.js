import{t as e,s as o,c as r,a as t,r as n,T as i}from"./vendor.00f03d2a.js";const a=e("<h3>Sign in to spotify and backup this weeks discover weekly!</h3>"),d=o("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`,c=o("div")`
	background-color: ${e=>e.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`,l=o("a")`
	background-color: white;
	color: black;
	text-decoration: none;
	padding: 8px;
	border-radius: 8px;
	transition: background-color 0.2s ease;
	&:hover {
		background-color: ${e=>e.theme.black};
		color: white;
	}
`,s=()=>r(d,{get children(){return r(c,{get children(){return[a.cloneNode(!0),r(l,{href:"",children:"Login to spotify"})]}})}}),g=t`
	* {
		font-family: circular;
		box-sizing: border-box;
		color: white;
	}
	body {
		margin: 0;
		padding: 0;
		background-color: ${e=>e.theme.black};
	}
	html,
	body,
	#root {
		height: 100%;
	}
`;n((()=>r(i,{theme:{black:"#191414",green:"#1db954"},get children(){return[r(g,{}),r(s,{})]}})),document.getElementById("root"));
