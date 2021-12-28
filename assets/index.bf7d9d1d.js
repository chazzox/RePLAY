import{c as e,s as t,a as o,t as r,b as n,m as i,i as a,r as s,o as c,T as l,d}from"./vendor.3383feaf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p=t("div")`
	background-color: ${e=>e.theme.secondaryBlack};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
		rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
	font-size: 25px;
	font-weight: 600;
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
`,y=e`
	* {
		font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
		color: ${e=>e.theme.white};
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
`,m=t("div")`
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
`,w=t("h3")`
	font-weight: 600;
	font-size: 25px;
	padding: 5px;
	margin: 5px;
`,b=t("p")`
	font-weight: 400;
	margin: 5px;
`,x=t("div")`
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
`,k=t(x)`
	background-color: #cc1a2b;
`;const v=()=>o(p,{get children(){return[o(g,{children:"REPLAY"}),o(w,{children:"What is replay?"}),o(b,{children:"• Replay is a a simplistic tools that backups your discover weekly at the press of a button!"}),o(b,{children:"• This can be useful if you find yourself frequently forgetting to listen to the whole of it and the clock is ticking towards midnight on the final day"}),o(b,{children:"• Note: You must be following your discover weekly for this tool to work"}),o(w,{children:"Sign in to spotify and backup this weeks discover weekly!"}),o(u,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),z=r("<form></form>"),E=[200,201];async function $(e,t){const o=await async function(e){const t=[];let o="https://api.spotify.com/v1/me/playlists?limit=50";for(;o;){const r=await fetch(o,{method:"GET",headers:{Authorization:"Bearer "+e}});if(!E.includes(r.status))throw Error("Playlist fetch Unsuccessful");const n=await r.json();t.push(...n.items),o=n.next}return t}(e);for(const r in o)if(o[r].name===t)return o[r];throw Error("Could not find Discover weekly playlist in followed playlists")}const P=({token:e})=>{const[t,r]=n(""),[s,c]=n(!1),[l,d]=n("");async function u(e,t){try{const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e}});if(!E.includes(t.status))throw Error("Creating new playlist was unsuccessful");return(await t.json()).id}(e),r=await $(e,"Discover Weekly"),n=await async function(e,t){const o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}}),r=await o.json();if(!E.includes(o.status))throw Error("Fetching Discover weekly tracklist failed");return r.items}(e,r.tracks.href),i=await async function(e,t,o){const r=await fetch(`https://api.spotify.com/v1/users/${t}/playlists`,{method:"POST",headers:{Authorization:"Bearer "+e},body:JSON.stringify({name:o,description:"New playlist description",public:!1})});if(!E.includes(r.status))throw Error("Creating new playlist was unsuccessful");return(await r.json()).id}(e,o,t);await async function(e,t,o){const r=new URL(`https://api.spotify.com/v1/playlists/${t}/tracks`);r.searchParams.append("uris",o.join());const n=await fetch(r.toString(),{method:"POST",headers:{Authorization:"Bearer "+e}});if(!E.includes(n.status))throw Error("Adding songs failed")}(e,i,n.map((e=>e.track.uri))),c(!0)}catch(r){o=r.message,d(""),d(o)}var o}return o(p,{get children(){return[o(g,{children:"Save your Discover Weekly"}),i((()=>{const n=i((()=>!s()),!0);return()=>n()?[o(w,{children:"Name of backup"}),(()=>{const n=z.cloneNode(!0);return n.addEventListener("submit",(o=>{o.preventDefault(),""!=t()&&u(e,t())})),a(n,o(h,{type:"text",required:!0,onInput:e=>{r(e.target.value)},get value(){return t()}}),null),a(n,o(f,{type:"submit",children:"Backup Your Discover weekly"}),null),n})()]:o(w,{children:"Discover weekly has been saved"})})()),i((()=>{const e=i((()=>""!==l()),!0);return()=>e()&&o(k,{get children(){return l()}})})())]}})};s((()=>{const[e,t]=n("");return c((()=>{document.cookie&&""===window.location.hash&&parseInt(d.get("expiry"))>Date.now()&&t(d.get("access_token"));const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(t(e.access_token),d.set("access_token",e.access_token),d.set("expiry",String(Date.now()+1e3*parseInt(e.expires_in))),window.location.hash="")})),o(l,{theme:{black:"#121212",green:"#1db954",secondaryGreen:"#15883e",white:"#ffffff",secondaryBlack:"#181818"},get children(){return[o(y,{}),o(m,{get children(){const t=i((()=>""===e()),!0);return()=>t()?o(v,{}):o(P,{get token(){return e()}})}})]}})}),document.getElementById("root"));
