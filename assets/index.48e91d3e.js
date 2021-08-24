import{s as e,t,c as r,a as o,o as n,b as i,i as s,m as a,d as c,e as d,f as l,r as p,T as h}from"./vendor.cee85c62.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u=e("div")`
	background-color: ${e=>e.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`,m=t('<h1 style="margin-top:1px;">REPLAY</h1>'),g=t("<h3>Sign in to spotify and backup this weeks discover weekly!</h3>"),f=e("a")`
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
`;const y=()=>r(u,{get children(){return[m.cloneNode(!0),g.cloneNode(!0),r(f,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),b=t("<h1></h1>"),x=t("<p>No. of Songs: </p>"),k=t("<div></div>"),v=t('<img alt="">'),w=t("<p></p>"),N=e("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > img {
		height: 150px;
	}
`,L=e("div")`
	display: flex;
	background-color: ${e=>e.theme.green};
	padding: 15px;
	margin: 15px;
	border-radius: 8px;
	& > img {
		height: 50px;
		margin-left: 15px;
	}
`,P=({token:e})=>{const[t,l]=o({name:"",images:[],id:""}),[p,h]=o([]);return n((()=>{fetch("https://api.spotify.com/v1/me/playlists",{method:"GET",headers:{Authorization:"Bearer "+e}}).then((e=>e.json())).then((e=>l(e.items.filter((e=>"Discover Weekly"===e.name))[0])))})),i((()=>{""!==t().id&&fetch(`https://api.spotify.com/v1/playlists/${t().id}/tracks`,{method:"GET",headers:{Authorization:"Bearer "+e}}).then((e=>e.json())).then((e=>h(e.items)))})),(()=>{const e=k.cloneNode(!0);return s(e,r(N,{get children(){return[(()=>{const e=b.cloneNode(!0);return s(e,(()=>t().name)),e})(),a((()=>{const e=a((()=>t().images.length>0),!0);return()=>e()&&(()=>{const e=v.cloneNode(!0);return c((()=>d(e,"src",t().images[0].url))),e})()})()),(()=>{const e=x.cloneNode(!0);return e.firstChild,s(e,(()=>p().length),null),e})(),a((()=>p().map((e=>r(L,{get children(){return[(()=>{const t=w.cloneNode(!0);return s(t,(()=>e.track.name)),t})(),(()=>{const t=v.cloneNode(!0);return c((()=>d(t,"src",e.track.album.images[0].url))),t})()]}})))))]}})),e})()},j=e("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`,z=()=>{const[e,t]=o("");return n((()=>{const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(t(e.access_token),window.location.hash="")})),(()=>{const t=a((()=>""===e()),!0);return()=>t()?r(j,{get children(){return r(y,{})}}):r(P,{get token(){return e()}})})()},E=l`
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
`;p((()=>r(h,{theme:{black:"#191414",green:"#1db954"},get children(){return[r(E,{}),r(z,{})]}})),document.getElementById("root"));
