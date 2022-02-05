import"./modulepreload-polyfill.b7f2da20.js";import{c as e,s as t,t as o,a as n,i,b as r,m as a,r as s,o as c,T as l,d}from"./vendor.3383feaf.js";const p=t("div")`
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
`,h=t("a")`
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
`,u=t("input")`
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
`,f=t("button")`
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
`,m=t("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`,w=t("h1")`
	font-weight: 900;
	padding: 5px;
	margin: 5px;
	font-size: 35px;
`,y=t("h3")`
	font-weight: 600;
	font-size: 25px;
	padding: 5px;
	margin: 5px;
`,x=t("p")`
	font-weight: 400;
	margin: 5px;
`,b=t("div")`
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
`,k=t(b)`
	background-color: #cc1a2b;
`,v=o('<img class="backgroundNote" src="./music-note.png">'),N=o('<span class="green">PLAY</span>'),z=o('<div id="mainContent"></div>'),$=o('<div id="sidebar"></div>');const P=()=>[v.cloneNode(!0),v.cloneNode(!0),v.cloneNode(!0),n(w,{get children(){return["Re",N.cloneNode(!0)]}}),n(p,{get children(){return[(()=>{const e=z.cloneNode(!0);return i(e,n(y,{children:"Backup this weeks discover weekly!"}),null),i(e,n(x,{children:"You must be following your discover weekly for this tool to work."}),null),i(e,n(h,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to Spotify"}),null),e})(),(()=>{const e=$.cloneNode(!0);return i(e,n(y,{children:"What is RePLAY?"}),null),i(e,n(x,{children:"Replay is a a simplistic tools that backups your discover weekly at the press of a button!"}),null),i(e,n(x,{children:"For those times you find yourself frequently forgetting to listen to the whole of it and the clock is ticking towards midnight on the final day."}),null),e})()]}})],E=o('<img class="backgroundNote" src="./music-note.png">'),j=o('<span class="green">PLAY</span>'),S=o('<div id="mainContent"></div>'),A=o('<div id="sidebar"></div>'),B=o("<h2>Save your Discover Weekly</h2>"),D=o('<form><div id="formHeader">Name your Backup:</div></form>'),_=o("<h2>Success!</h2>"),L=[200,201];async function R(e,t){const o=await async function(e){const t=[];let o="https://api.spotify.com/v1/me/playlists?limit=50";for(;o;){const n=await fetch(o,{method:"GET",headers:{Authorization:"Bearer "+e}});if(!L.includes(n.status))throw Error("Playlist fetch Unsuccessful");const i=await n.json();t.push(...i.items),o=i.next}return t}(e);for(const n in o)if(o[n].name===t)return o[n];throw Error("Could not find Discover weekly playlist in followed playlists")}const C=({token:e})=>{const[t,o]=r(""),[s,c]=r(!1),[l,d]=r("");async function h(e,t){try{const o=await async function(e){const t=await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+e}});if(!L.includes(t.status))throw Error("Creating new playlist was unsuccessful");return(await t.json()).id}(e),n=await R(e,"Discover Weekly"),i=await async function(e,t){const o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}}),n=await o.json();if(!L.includes(o.status))throw Error("Fetching Discover weekly tracklist failed");return n.items}(e,n.tracks.href),r=await async function(e,t,o){const n=await fetch(`https://api.spotify.com/v1/users/${t}/playlists`,{method:"POST",headers:{Authorization:"Bearer "+e},body:JSON.stringify({name:o,description:"New playlist description",public:!1})});if(!L.includes(n.status))throw Error("Creating new playlist was unsuccessful");return(await n.json()).id}(e,o,t);await async function(e,t,o){const n=new URL(`https://api.spotify.com/v1/playlists/${t}/tracks`);n.searchParams.append("uris",o.join());const i=await fetch(n.toString(),{method:"POST",headers:{Authorization:"Bearer "+e}});if(!L.includes(i.status))throw Error("Adding songs failed")}(e,r,i.map((e=>e.track.uri))),c(!0)}catch(n){o=n.message,d(""),d(o)}var o}return[E.cloneNode(!0),E.cloneNode(!0),E.cloneNode(!0),n(w,{get children(){return["Re",j.cloneNode(!0)]}}),n(p,{get children(){return[(()=>{const r=S.cloneNode(!0);return i(r,(()=>{const r=a((()=>!s()),!0);return()=>r()?[B.cloneNode(!0),(()=>{const r=D.cloneNode(!0);return r.firstChild,r.addEventListener("submit",(o=>{o.preventDefault(),""!=t()&&h(e,t())})),i(r,n(u,{type:"text",required:!0,placeholder:"New Playlist Name",onInput:e=>{o(e.target.value)},get value(){return t()}}),null),i(r,n(f,{type:"submit",children:"Backup Now"}),null),r})()]:[_.cloneNode(!0),n(y,{children:"Discover Weekly has been saved"})]})(),null),i(r,(()=>{const e=a((()=>""!==l()),!0);return()=>e()&&n(k,{get children(){return l()}})})(),null),r})(),(()=>{const e=A.cloneNode(!0);return i(e,n(y,{children:"What is RePLAY?"}),null),i(e,n(x,{children:"Replay is a a simplistic tools that backups your discover weekly at the press of a button!"}),null),i(e,n(x,{children:"For those times you find yourself frequently forgetting to listen to the whole of it and the clock is ticking towards midnight on the final day."}),null),e})()]}})]};s((()=>{const[e,t]=r("");return c((()=>{document.cookie&&""===window.location.hash&&parseInt(d.get("expiry"))>Date.now()&&t(d.get("access_token"));const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(t(e.access_token),d.set("access_token",e.access_token),d.set("expiry",String(Date.now()+1e3*parseInt(e.expires_in))),history.pushState("",document.title,window.location.pathname+window.location.search))})),n(l,{theme:{black:"#172228",gray:"#dadae2",green:"#1db954",secondaryGreen:"#15883e",white:"#ffffff",offWhite:"#f9f5f2",secondaryBlack:"#181818"},get children(){return[n(g,{}),n(m,{get children(){const t=a((()=>""===e()),!0);return()=>t()?n(P,{}):n(C,{get token(){return e()}})}})]}})}),document.getElementById("root"));
