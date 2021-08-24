import{s as e,t as r,c as t,a as o,o as n,i,m as a,b as s,d as c,e as d,r as l,T as p}from"./vendor.fd9559ed.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const h=e("div")`
	background-color: ${e=>e.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`,u=r('<h1 style="margin-top:1px;">REPLAY</h1>'),g=r("<h3>Sign in to spotify and backup this weeks discover weekly!</h3>"),m=e("a")`
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
`;const f=()=>t(h,{get children(){return[u.cloneNode(!0),g.cloneNode(!0),t(m,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","https://chazzox.github.io/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),b=r("<div></div>"),y=r("<h3></h3>"),x=r('<img alt="">'),k=e("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${e=>e.theme.green};
	margin: 45px;
	padding: 8px;
	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
	padding-bottom: 25px;
	& > img {
		height: 150px;
	}
`,w=({token:e})=>{const[r,d]=o([]);return n((()=>{const r=new URL("https://api.spotify.com/v1/me/playlists");fetch(r.toString(),{method:"GET",headers:{Authorization:"Bearer "+e}}).then((e=>e.json())).then((e=>d(e.items)))})),(()=>{const e=b.cloneNode(!0);return i(e,(()=>r().map((e=>t(k,{get children(){return[(()=>{const r=y.cloneNode(!0);return i(r,(()=>e.name)),r})(),a((()=>{const r=a((()=>e.images.length>0),!0);return()=>r()&&(()=>{const r=x.cloneNode(!0);return s((()=>c(r,"src",e.images[0].url))),r})()})())]}}))))),e})()},v=e("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`,L=()=>{const[e,r]=o("");return n((()=>{const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(r(e.access_token),window.location.hash="")})),(()=>{const r=a((()=>""===e()),!0);return()=>r()?t(v,{get children(){return t(f,{})}}):t(w,{get token(){return e()}})})()},N=d`
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
`;l((()=>t(p,{theme:{black:"#191414",green:"#1db954"},get children(){return[t(N,{}),t(L,{})]}})),document.getElementById("root"));
