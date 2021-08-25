import{s as e,t as o,c as r,a as t,i as n,o as i,m as a,b as c,r as s,T as d}from"./vendor.bec89bbe.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const l=e("div")`
	background-color: ${e=>e.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`,u=o('<h1 style="margin-top:1px;">REPLAY</h1>'),p=o("<h3>Sign in to spotify and backup this weeks discover weekly!</h3>"),h=e("a")`
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
`;const b=()=>r(l,{get children(){return[u.cloneNode(!0),p.cloneNode(!0),r(h,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),g=o("<h1>Save your Discover Weekly</h1>"),m=o("<h2>Name of backup</h2>"),f=o("<form></form>");const y=e("input")`
	display: block;
	margin: 10px auto;
	background-color: ${e=>e.theme.black};
	border: none;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
`,k=e("button")`
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
		background-color: ${e=>e.theme.black};
	}
`,x=({token:e})=>{const[o,i]=t("");return r(l,{get children(){return[g.cloneNode(!0),m.cloneNode(!0),(()=>{const e=f.cloneNode(!0);return e.addEventListener("submit",(e=>{""!=o()&&async function(e,o){}(0,o())})),n(e,r(y,{type:"text",required:!0,onInput:e=>i(e.target.value),get value(){return o()}}),null),n(e,r(k,{type:"submit",children:"Backup Your Discover weekly"}),null),e})()]}})},v=e("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`,w=()=>{const[e,o]=t("");return i((()=>{const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(o(e.access_token),window.location.hash="")})),r(v,{get children(){const o=a((()=>""===e()),!0);return()=>o()?r(b,{}):r(x,{get token(){return e()}})}})},L=c`
	* {
		font-family: 'Montserrat', sans-serif;
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
`;s((()=>r(d,{theme:{black:"#191414",green:"#1db954"},get children(){return[r(L,{}),r(w,{})]}})),document.getElementById("root"));
