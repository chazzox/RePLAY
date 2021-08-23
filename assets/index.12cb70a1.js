import{s as e,t as r,c as t,a as o,o as n,i,m as a,b as s,d as c,e as d,r as l,T as p}from"./vendor.fd9559ed.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const h=e("div")`
	background-color: ${e=>e.theme.green};
	padding: 30px;
	border-radius: 30px;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`,u=r("<h3>Sign in to spotify and backup this weeks discover weekly!</h3>"),m=e("a")`
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
`;const g=()=>t(h,{get children(){return[u.cloneNode(!0),t(m,{get href(){return function(){const e=new URL("https://accounts.spotify.com/authorize");return e.searchParams.append("show_dialog","true"),e.searchParams.append("response_type","token"),e.searchParams.append("client_id","b487c0ac409c4b4aba8703323c9e8305"),e.searchParams.append("redirect_uri","http://localhost:3000/replay/"),e.searchParams.append("scope",["playlist-modify-private","playlist-read-private","playlist-modify-public"].join(" ")),e.toString()}()},children:"Login to spotify"})]}}),f=r("<div></div>"),b=r("<h3></h3>"),y=r('<img alt="">'),x=e("div")`
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
`,k=({token:e})=>{const[r,d]=o([]);return n((()=>{const r=new URL("https://api.spotify.com/v1/me/playlists");fetch(r.toString(),{method:"GET",headers:{Authorization:"Bearer "+e}}).then((e=>e.json())).then((e=>d(e.items)))})),(()=>{const e=f.cloneNode(!0);return i(e,(()=>r().map((e=>t(x,{get children(){return[(()=>{const r=b.cloneNode(!0);return i(r,(()=>e.name)),r})(),a((()=>{const r=a((()=>e.images.length>0),!0);return()=>r()&&(()=>{const r=y.cloneNode(!0);return s((()=>c(r,"src",e.images[0].url))),r})()})())]}}))))),e})()},w=e("div")`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`,v=()=>{const[e,r]=o("");return n((()=>{const e=Object.fromEntries(new URLSearchParams(document.location.hash.slice(1)).entries());e.access_token&&(r(e.access_token),window.location.hash="")})),t(w,{get children(){const r=a((()=>""===e()),!0);return()=>r()?t(g,{}):t(k,{get token(){return e()}})}})},L=d`
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
`;l((()=>t(p,{theme:{black:"#191414",green:"#1db954"},get children(){return[t(L,{}),t(v,{})]}})),document.getElementById("root"));
