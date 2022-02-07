import"./modulepreload-polyfill.b7f2da20.js";import{c as e,s as t,t as o,i as n,a as r,b as i,m as a,r as s,o as c,d as l,T as d,e as p}from"./vendor.9fb884c4.js";const h=t("div")`
	background-color: ${e=>e.theme.white};
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
`,u=t("a")`
	display: block;
	background-color: ${e=>e.theme.green};
	color: ${e=>e.theme.white};
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
		background-color: ${e=>e.theme.secondaryGreen};
	}
`,f=t("input")`
	display: block;
	margin: 10px auto;
	color: ${e=>e.theme.black};
	border: ${e=>e.theme.gray} 1px solid;
	padding: 8px;
	border-radius: 8px;
	outline: none;
	font-size: 15px;
	margin-bottom: 24px;
	width: calc(100% - 32px);

	transition: background-color 0.2s ease;
	&:focus {
		background-color: ${e=>e.theme.gray};
	}
`,m=t("button")`
	display: block;
	background-color: ${e=>e.theme.green};
	color: ${e=>e.theme.white};
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
	border: none;
	outline: none;
	margin: auto;
	cursor: pointer;
	&:hover {
		background-color: ${e=>e.theme.secondaryGreen};
	}
`,g=e`
	* {
		font-family: 'Montserrat', sans-serif;
		box-sizing: border-box;
		color: ${e=>e.theme.black};
	}
	h1 {
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
	.green {
		color: ${e=>e.theme.green};
	}
	#mainContent, #sidebar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#sidebar {
		background-color: ${e=>e.theme.offWhite};
		width: 40%;
		padding: 12px;
		flex-shrink: 0;
	}
	#mainContent {
		padding: 12px;
		width: 100%;
	}
	.backgroundNote {
		opacity: .33;
		position: fixed;
		z-index: -99;
		width: 30vw;
		height: 30vw;
		&:nth-of-type(1) {
			left: 70vw;
			top: 45vh;
			transform: rotate(5deg);
		}
		&:nth-of-type(2) {
			width: 20vw;
			height: 20vw;
			left: -1vw;
			top: 2vh;
			transform: rotate(-24deg);
		}
		&:nth-of-type(3) {
			width: 15vw;
			height: 15vw;
			left: 17vw;
			top: 62vh;
			transform: rotate(-8deg);
		}	
	}
	form {
		width: calc(100% - 32px);

		#formHeader {
			text-align: left;
			margin-left: 16px;
			margin-top: 24px;
		}
	}
`,w=t("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`,y=t("h1")`
	font-weight: 900;
	padding: 5px;
	margin: 5px;
	font-size: 35px;
`,x=t("h3")`
	font-weight: 600;
	font-size: 25px;
	padding: 5px;
	margin: 5px;
`,b=t("p")`
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
`,v=t(k)`
	background-color: #cc1a2b;
`,N=o('<div id="mainContent"></div>');const z=()=>(()=>{const e=N.cloneNode(!0);return n(e,r(x,{children:"Backup this weeks discover weekly!"}),null),n(e,r(b,{children:"You must be following your discover weekly for this tool to work."}),null),n(e,r(u,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.uk/RePLAY/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to Spotify"}),null),e})(),$=o('<div id="mainContent"></div>'),P=o("<h2>Save your Discover Weekly</h2>"),E=o('<form><div id="formHeader">Name your Backup:</div></form>'),j=o("<h2>Success!</h2>"),S=[200,201];async function A(e,t){const o=await async function(e){const t=[];let o="https://api.spotify.com/v1/me/playlists?limit=50";for(;o;){const n=await fetch(o,{method:"GET",headers:{Authorization:"Bearer "+e}});if(!S.includes(n.status))throw Error("Playlist fetch Unsuccessful");const r=await n.json();t.push(...r.items),o=r.next}return t}(e);for(const n in o)if(o[n].name===t)return o[n];throw Error("Could not find Discover weekly playlist in followed playlists")}const B=({token:e})=>{const[t,o]=i(""),[s,c]=i(!1),[l,d]=i("");async function p(e,t){try{const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e}});if(!S.includes(t.status))throw Error("Creating new playlist was unsuccessful");return(await t.json()).id}(e),n=await A(e,"Discover Weekly"),r=await async function(e,t){const o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}}),n=await o.json();if(!S.includes(o.status))throw Error("Fetching Discover weekly tracklist failed");return n.items}(e,n.tracks.href),i=await async function(e,t,o){const n=await fetch(`https://api.spotify.com/v1/users/${t}/playlists`,{method:"POST",headers:{Authorization:"Bearer "+e},body:JSON.stringify({name:o,description:"New playlist description",public:!1})});if(!S.includes(n.status))throw Error("Creating new playlist was unsuccessful");return(await n.json()).id}(e,o,t);await async function(e,t,o){const n=new URL(`https://api.spotify.com/v1/playlists/${t}/tracks`);n.searchParams.append("uris",o.join());const r=await fetch(n.toString(),{method:"POST",headers:{Authorization:"Bearer "+e}});if(!S.includes(r.status))throw Error("Adding songs failed")}(e,i,r.map((e=>e.track.uri))),c(!0)}catch(n){o=n.message,d(""),d(o)}var o}return(()=>{const i=$.cloneNode(!0);return n(i,(()=>{const i=a((()=>!s()),!0);return()=>i()?[P.cloneNode(!0),(()=>{const i=E.cloneNode(!0);return i.firstChild,i.addEventListener("submit",(o=>{o.preventDefault(),""!=t()&&p(e,t())})),n(i,r(f,{type:"text",required:!0,placeholder:"New Playlist Name",onInput:e=>{o(e.target.value)},get value(){return t()}}),null),n(i,r(m,{type:"submit",children:"Backup Now"}),null),i})()]:[j.cloneNode(!0),r(x,{children:"Discover Weekly has been saved"})]})(),null),n(i,(()=>{const e=a((()=>""!==l()),!0);return()=>e()&&r(v,{get children(){return l()}})})(),null),i})()};var D="/RePLAY/assets/music-note.7c6cc88d.png";const _=o('<img class="backgroundNote">'),L=o('<span class="green">PLAY</span>'),C=o('<div id="sidebar"></div>');s((()=>{const[e,t]=i("");return c((()=>{document.cookie&&""===window.location.hash&&parseInt(p.get("expiry"))>Date.now()&&t(p.get("access_token"));const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(t(e.access_token),p.set("access_token",e.access_token),p.set("expiry",String(Date.now()+1e3*parseInt(e.expires_in))),history.pushState("",document.title,window.location.pathname+window.location.search))})),r(d,{theme:{black:"#172228",gray:"#dadae2",green:"#1db954",secondaryGreen:"#15883e",white:"#ffffff",offWhite:"#f9f5f2",secondaryBlack:"#181818"},get children(){return[r(g,{}),r(w,{get children(){return[(()=>{const e=_.cloneNode(!0);return l(e,"src",D),e})(),(()=>{const e=_.cloneNode(!0);return l(e,"src",D),e})(),(()=>{const e=_.cloneNode(!0);return l(e,"src",D),e})(),r(y,{get children(){return["Re",L.cloneNode(!0)]}}),r(h,{get children(){return[a((()=>{const t=a((()=>""===e()),!0);return()=>t()?r(z,{}):r(B,{get token(){return e()}})})()),(()=>{const e=C.cloneNode(!0);return n(e,r(x,{children:"What is RePLAY?"}),null),n(e,r(b,{children:"Replay is a simple tool that lets you backup your discover weekly playlist at the press of a button!"}),null),n(e,r(b,{children:"For those times you find yourself frequently forgetting to listen to the whole of it and the clock is ticking towards midnight on the final day."}),null),e})()]}})]}})]}})}),document.getElementById("root"));
