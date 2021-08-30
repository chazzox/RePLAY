import{c as e,s as t,t as o,a as r,b as n,i as a,r as i,o as s,m as c,T as d,d as l}from"./vendor.71911665.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p=t("div")`
	background-color: ${e=>e.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`,u=t("a")`
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
`,h=t("input")`
	display: block;
	margin: 10px auto;
	background-color: ${e=>e.theme.black};
	border: none;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
`,m=t("button")`
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
`,f=e`
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
`,y=t("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`,g=o('<h1 style="margin-top:1px;">REPLAY</h1>'),b=o("<h3>Sign in to spotify and backup this weeks discover weekly!</h3>");const k=()=>r(p,{get children(){return[g.cloneNode(!0),b.cloneNode(!0),r(u,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),w=o("<h1>Save your Discover Weekly</h1>"),x=o("<h2>Name of backup</h2>"),v=o("<form></form>");async function z(e,t){const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me/playlists?limit=50",{method:"GET",headers:{Authorization:"Bearer "+e}});return(await t.json()).items}(e);for(const r in o)if(o[r].name===t)return o[r]}async function N(e,t){const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e}});return(await t.json()).id}(e),r=await async function(e,t,o){const r=await fetch(`https://api.spotify.com/v1/users/${t}/playlists`,{method:"POST",headers:{Authorization:"Bearer "+e},body:JSON.stringify({name:o,description:"New playlist description",public:!1})});return(await r.json()).id}(e,o,t),n=await z(e,"Discover Weekly");!async function(e,t,o){const r=new URL(`https://api.spotify.com/v1/playlists/${t}/tracks`);r.searchParams.append("uris",o.join()),fetch(r.toString(),{method:"POST",headers:{Authorization:"Bearer "+e}})}(e,r,(await async function(e,t){const o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}});return(await o.json()).items}(e,n.tracks.href)).map((e=>e.track.uri)))}const P=({token:e})=>{const[t,o]=n("");return r(p,{get children(){return[w.cloneNode(!0),x.cloneNode(!0),(()=>{const n=v.cloneNode(!0);return n.addEventListener("submit",(o=>{o.preventDefault(),""!=t()&&N(e,t())})),a(n,r(h,{type:"text",required:!0,onInput:e=>{o(e.target.value)},get value(){return t()}}),null),a(n,r(m,{type:"submit",children:"Backup Your Discover weekly"}),null),n})()]}})};i((()=>{const[e,t]=n("");return s((()=>{document.cookie&&""===window.location.hash&&parseInt(l.get("expiry"))>Date.now()&&t(l.get("access_token"));const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(t(e.access_token),l.set("access_token",e.access_token),l.set("expiry",String(Date.now()+1e3*parseInt(e.expires_in))),window.location.hash="")})),r(d,{theme:{black:"#191414",green:"#1db954"},get children(){return[r(f,{}),r(y,{get children(){const t=c((()=>""===e()),!0);return()=>t()?r(k,{}):r(P,{get token(){return e()}})}})]}})}),document.getElementById("root"));
