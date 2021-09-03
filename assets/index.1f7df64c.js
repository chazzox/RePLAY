import{c as e,s as t,a as o,t as r,b as n,m as i,i as a,r as s,o as c,T as d,d as l}from"./vendor.71911665.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p=t("div")`
	background-color: ${e=>e.theme.secondaryBlack};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`,u=t("a")`
	display: block;
	width: 40%;
	margin: auto;
	background-color: ${e=>e.theme.secondaryGreen};
	color: ${e=>e.theme.white};
	text-decoration: none;
	padding: 8px;
	border-radius: 8px;
	transition: background-color 0.2s ease;
	&:hover {
		background-color: ${e=>e.theme.green};
	}
`,h=t("input")`
	display: block;
	margin: 10px auto;
	background-color: ${e=>e.theme.white};
	color: ${e=>e.theme.black};
	border: none;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;

	transition: background-color 0.2s ease;
	&:focus {
		background-color: ${e=>e.theme.green};
		color: ${e=>e.theme.white};
	}
`,f=t("button")`
	display: block;
	margin: auto;
	font-size: 15px;
	background-color: ${e=>e.theme.secondaryGreen};
	color: ${e=>e.theme.white};
	border: none;
	border-radius: 8px;
	padding: 8px;
	transition: background-color 0.2s ease;
	cursor: pointer;
	&:hover {
		background-color: ${e=>e.theme.green};
	}
`,m=e`
	* {
		font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
		color: ${e=>e.theme.white};
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
`,g=t("h1")`
	font-weight: 900;
	padding: 5px;
	margin: 5px;
	font-size: 35px;
`,b=t("h3")`
	font-weight: 600;
	font-size: 25px;
	padding: 5px;
	margin: 5px;
`,w=t("p")`
	font-weight: 400;
	margin: 5px;
`,k=t("div")`
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
`,x=t(k)`
	background-color: #cc1a2b;
`;const v=()=>o(p,{get children(){return[o(g,{children:"REPLAY"}),o(b,{children:"What is replay?"}),o(w,{children:"• Replay is a a simplistic tools that backups your discover weekly at the press of a button!"}),o(w,{children:"• This can be useful if you find yourself frequently forgetting to listen to the whole of it and the clock is ticking towards midnight on the final day"}),o(w,{children:"• Note: You must be following your discover weekly for this tool to work"}),o(b,{children:"Sign in to spotify and backup this weeks discover weekly!"}),o(u,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),$=r("<form></form>");async function z(e,t){const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me/playlists?limit=50",{method:"GET",headers:{Authorization:"Bearer "+e}});return(await t.json()).items}(e);for(const r in o)if(o[r].name===t)return o[r];return""}const P=({token:e})=>{const[t,r]=n(""),[s,c]=n(!1),[d,l]=n("");async function u(e,t){const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e}});return(await t.json()).id}(e),r=await async function(e,t,o){const r=await fetch(`https://api.spotify.com/v1/users/${t}/playlists`,{method:"POST",headers:{Authorization:"Bearer "+e},body:JSON.stringify({name:o,description:"New playlist description",public:!1})});return(await r.json()).id}(e,o,t),n=await z(e,"Discover Weekly");if(""===n)return l("Could not find discover weekly playlist"),setTimeout((()=>{l("")}),2e3),1;const i=await async function(e,t){const o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}});return(await o.json()).items}(e,n.tracks.href);"snapshot_id"in await async function(e,t,o){const r=new URL(`https://api.spotify.com/v1/playlists/${t}/tracks`);r.searchParams.append("uris",o.join());const n=await fetch(r.toString(),{method:"POST",headers:{Authorization:"Bearer "+e}});return await n.json()}(e,r,i.map((e=>e.track.uri)))&&c(!0)}return o(p,{get children(){return[o(g,{children:"Save your Discover Weekly"}),i((()=>{const n=i((()=>!s()),!0);return()=>n()?[o(b,{children:"Name of backup"}),(()=>{const n=$.cloneNode(!0);return n.addEventListener("submit",(o=>{o.preventDefault(),""!=t()&&u(e,t())})),a(n,o(h,{type:"text",required:!0,onInput:e=>{r(e.target.value)},get value(){return t()}}),null),a(n,o(f,{type:"submit",children:"Backup Your Discover weekly"}),null),n})()]:o(b,{children:"Discover weekly has been saved"})})()),i((()=>{const e=i((()=>""!==d()),!0);return()=>e()&&o(x,{get children(){return d()}})})())]}})};s((()=>{const[e,t]=n("");return c((()=>{document.cookie&&""===window.location.hash&&parseInt(l.get("expiry"))>Date.now()&&t(l.get("access_token"));const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(t(e.access_token),l.set("access_token",e.access_token),l.set("expiry",String(Date.now()+1e3*parseInt(e.expires_in))),window.location.hash="")})),o(d,{theme:{black:"#121212",green:"#1db954",secondaryGreen:"#15883e",white:"#ffffff",secondaryBlack:"#181818"},get children(){return[o(m,{}),o(y,{get children(){const t=i((()=>""===e()),!0);return()=>t()?o(v,{}):o(P,{get token(){return e()}})}})]}})}),document.getElementById("root"));
