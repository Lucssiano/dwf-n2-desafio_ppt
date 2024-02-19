var e=globalThis,t={},s={},r=e.parcelRequire0eff;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var r=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},e.parcelRequire0eff=r);var o=r.register;o("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>s,set:e=>s=e,enumerable:!0,configurable:!0});var s,r=new Map;s=function(e,t){for(var s=0;s<t.length-1;s+=2)r.set(t[s],{baseUrl:e,path:t[s+1]})}}),o("bsyEv",function(e,t){e.exports=new URL("rock.99d972ee.png",import.meta.url).toString()}),o("hIjkm",function(e,t){e.exports=new URL("paper.c8d4c533.png",import.meta.url).toString()}),o("NuPtN",function(e,t){e.exports=new URL("scissors.134c3612.png",import.meta.url).toString()}),o("itS45",function(e,t){e.exports=new URL("win-star.15374e79.png",import.meta.url).toString()}),o("26hmP",function(e,t){e.exports=new URL("lose-star.5de9781a.png",import.meta.url).toString()}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.e34d1904.js","804YT","rock.99d972ee.png","abTdq","paper.c8d4c533.png","8lpQI","scissors.134c3612.png","fi2qB","win-star.15374e79.png","cefbP","lose-star.5de9781a.png"]'));const n={data:{currentGame:{computer:"",user:""},currentGameCounter:{computer:0,user:0},gameWins:{computer:0,user:0}},listeners:[],init(){let e=localStorage.getItem("state");e&&this.setState(JSON.parse(e))},resetScoreboard(){localStorage.removeItem("state");let e=this.getState();e.gameWins.computer=0,e.gameWins.user=0,this.setState(e)},subscribe(e){this.listeners.push(e)},getState(){return this.data},setState(e){this.data=e,this.listeners.forEach(e=>e()),console.log("nueva data",this.data),localStorage.setItem("state",JSON.stringify(e))},setPlay(e,t){let s=this.getState();s.currentGame[t]=e,this.setState(s)},addWin(e){let t=this.getState();t.gameWins[e]++,this.setState(t)},resetGameCounter(){let e=this.getState();e.currentGameCounter.user=0,e.currentGameCounter.computer=0,this.setState(e)},setPlayWinner(){let e=this.getState(),t=e.currentGame.user,s=e.currentGame.computer;t!=s&&("scissors"===t&&"paper"===s||"paper"===t&&"rock"===s||"rock"===t&&"scissors"===s?e.currentGameCounter.user++:e.currentGameCounter.computer++,this.setState(e))}};function a(e){let t=Array.from(e.querySelector(".user-hands")?.querySelectorAll("custom-hand")),s=Array.from(e.querySelector(".computer-hands")?.querySelectorAll("custom-hand")),r=e.querySelector(".timer-container"),o=e.querySelector(".timer__counter"),u=3,l=setInterval(()=>{r.classList.remove("inactive"),o&&(o.textContent=u.toString()),--u<0&&(r?.classList.toggle("inactive"),function(e){if(e.every(e=>!e.classList.contains("active"))){let t=e.find(e=>"paper"==e.getAttribute("type"));c(e,t,"user")}}(t),function(e){let t=e[Math.floor(3*Math.random())];c(e,t,"computer")}(s),n.setPlayWinner(),function(e){let t=n.getState().currentGameCounter;if(3==t.user||3==t.computer){let s=3==t.user?"user":"computer";n.addWin(s),function(e,t){let s=document.createElement("results-scoreboard");s.setAttribute("result",t),setTimeout(()=>{e.appendChild(s)},2e3)}(e,s)}else{let t=Array.from(e.querySelector(".user-hands")?.querySelectorAll("custom-hand")),s=Array.from(e.querySelector(".computer-hands")?.querySelectorAll("custom-hand"));setTimeout(()=>{i(t),i(s),a(e)},2e3)}}(e),clearInterval(l))},1e3);t.forEach(e=>{e.addEventListener("click",s=>{s.stopImmediatePropagation(),c(t,e,"user")})})}function c(e,t,s){t.classList.add("active"),e.filter(e=>e!==t).forEach(e=>e.classList.add("inactive"));let r=t.getAttribute("type")||"rock";t.classList.add(r),n.setPlay(r,s)}function i(e){e.forEach(e=>{e.classList.remove("active"),e.classList.remove("inactive")})}const u="/dwf-n2-desafio_ppt";function l(){return location.host.includes("github.io")}const d=[{path:/\/home/,component:function(e){let t=document.createElement("div");t.classList.add("home-container"),t.innerHTML=`
    <main class="main-section">
      <h1 class="title">Piedra Papel \xf3 Tijera</h1>
      <custom-button>Empezar</custom-button>
    </main>
    <div class="hands-container">
      <custom-hand type="rock"></custom-hand>
      <custom-hand type="paper"></custom-hand>
      <custom-hand type="scissors"></custom-hand>
    </div>
  `;let s=t.querySelector("custom-button");return s?.addEventListener("click",()=>e.goTo("/rules")),t}},{path:/\/rules/,component:function(e){let t=document.createElement("div");t.classList.add("rules-container"),t.innerHTML=`
        <div class="content">
          <p class="paragraph">
              Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
          </p>
          <p class="paragraph">
              El primer jugador en ganar 3 rondas es el ganador del juego.
          </p>
          <custom-button>\xa1Jugar!</custom-button>
        </div>
        <div class="hands-container">
            <custom-hand type="rock"></custom-hand>
            <custom-hand type="paper"></custom-hand>
            <custom-hand type="scissors"></custom-hand>
        </div>
    `;let s=t.querySelector("custom-button");return s?.addEventListener("click",()=>e.goTo("/game")),t}},{path:/\/game/,component:function(e){let t=document.createElement("div");return t.classList.add("game-container"),t.innerHTML=`
		<div class="hands-game-container computer-hands rotate">
			<custom-hand type="rock" class="computer-hand"></custom-hand>
			<custom-hand type="paper" class="computer-hand"></custom-hand>
			<custom-hand type="scissors" class="computer-hand"></custom-hand>
		</div>
		<div class="middle-game-section">
		  <players-scoreboard></players-scoreboard>
			<div class="timer-container">
				<div class="loader"></div>
				<div class="timer__counter"></div>
			</div>
		</div>
		<div class="hands-game-container user-hands">
			<custom-hand type="rock" class="user-hand"></custom-hand>
			<custom-hand type="paper" class="user-hand"></custom-hand>
			<custom-hand type="scissors" class="user-hand"></custom-hand>
		</div>
  `,a(t),t.addEventListener("playAgain",()=>{(function(e){n.resetGameCounter();let t=Array.from(e.querySelector(".user-hands")?.querySelectorAll("custom-hand")),s=Array.from(e.querySelector(".computer-hands")?.querySelectorAll("custom-hand"));i(t),i(s),a(e)})(t)}),t}}];class m extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
      <button class="button">${this.textContent}</button>
      `;let e=document.createElement("style");e.innerHTML=`
      .button {
        display: block;
        font-family: 'Odibee Sans', sans-serif;    
        font-size: 45px;
        cursor: pointer;
        padding: 20px 10px;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        border: 10px solid #001997;
        background-color: #006CFC;
        color: #D8FCFC;
      }
    `,this.shadow.appendChild(e)}}customElements.define("custom-button",m);const p={rock:r("bsyEv"),paper:r("hIjkm"),scissors:r("NuPtN")};class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("type")||"rock";this.shadow.innerHTML=`
       <img src="${p[e]}" class="hand-image">
    `;let t=document.createElement("style");t.innerHTML=`
		.hand-image {
			cursor: pointer;
			height: 100%;
		}
    `,this.shadow.appendChild(t)}}customElements.define("custom-hand",h);class g extends HTMLElement{constructor(){super(),this.computerCounter=0,this.userCounter=0,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){n.subscribe(()=>{let e=n.getState();this.computerCounter=e.currentGameCounter.computer,this.userCounter=e.currentGameCounter.user,this.render()}),this.render()}render(){this.shadow.innerHTML=`
		<div class="players-scoreboard">
			<div class="middle-game-section__counter">
				<h4 class="counter-title">Computadora</h4>
				<p class="counter-number computer">${this.computerCounter}</p>
			</div>
			<div class="middle-game-section__counter">
				<h4 class="counter-title">Usuario</h4>
				<p class="counter-number user">${this.userCounter}</p>
			</div>
		</div>
				`;let e=document.createElement("style");e.innerHTML=`
			.players-scoreboard {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 175px;
			}
			.counter-title {
				margin: 0;
				margin-bottom: 10px;
				font-size: 23px;
			}
			.counter-number {
				margin: 0;
				text-align: center;
				font-size: 20px;
				color: #070f2b;
				font-weight: 700;
			}
    `,this.shadow.appendChild(e)}}customElements.define("players-scoreboard",g);class f extends HTMLElement{constructor(){super(),this.computerCounter=n.getState().gameWins.computer,this.userCounter=n.getState().gameWins.user,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=n.getState().gameWins;this.computerCounter=e.computer,this.userCounter=e.user,this.render()}addBackground(e){this.shadowRoot?.querySelector(".results")?.classList.remove("loser"),this.shadowRoot?.querySelector(".results")?.classList.remove("winner"),this.shadowRoot?.querySelector(".results")?.classList.add(e)}render(){this.shadow.innerHTML=`
    <div class='results'>
      <button class="restart">X</button>
      <result-star></result-star>
      <div class='results__scoreboard'>
        <h4 class='results__scoreboard-title'>Score</h4>
        <p class='results__scoreboard-counter-container'>
          Usuario: <span class='results__scoreboard-counter'>${this.userCounter}</span>
        </p>
        <p class='results__scoreboard-counter-container'>
          Computadora: <span class='results__scoreboard-counter'>${this.computerCounter}</span>
        </p>
      </div>
      <custom-button class="play-again-button">Volver a jugar</custom-button>     
      </div>
      `,"computer"===this.getAttribute("result")?this.addBackground("loser"):this.addBackground("winner");let e=this.shadow.querySelector(".play-again-button");e?.addEventListener("click",()=>{let e=new CustomEvent("playAgain");this.parentElement?.dispatchEvent(e),this.remove()});let t=document.createElement("style");t.innerHTML=`
        .results {
          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        .results.winner {
          background-color: #888949E5;
        }
        .results.loser {
          background-color: #894949E5;
        }
        .results__scoreboard {
          border-radius: 4px;
          border: 10px solid #000;
          background-color: #fff;
          width: 230px;
          height: 180px;
          padding: 15px;
        }
        .results__scoreboard-title {
          margin: 0;
          font-size: 55px;
          text-align: center;
        }
        .results__scoreboard-counter-container {
          margin: 5px 0;
          text-align: right;
          font-size: 40px;
        } 
    `,this.shadow.appendChild(t)}}customElements.define("results-scoreboard",f);const b={winStar:r("itS45"),loseStar:r("26hmP")};class S extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=` <img src="${this.win?b.winStar:b.loseStar}" alt="Win star" class="star-img"> `;let e=document.createElement("style");e.innerHTML=`
			.star-img {
				width: 250px;
				height: 250px;
			}
    `,this.shadow.appendChild(e)}}customElements.define("result-star",S),function(){let e=document.querySelector(".root");e&&function(e){function t(e){let t=l()?u+e:e;history.pushState({},"",t),s(t)}function s(s){let r=l()?s.replace(u,""):s;for(let s of d)if(s.path.test(r)){let r=s.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(r)}}"/"===location.pathname?t("/home"):s(location.pathname),window.onpopstate=()=>s(location.pathname)}(e),n.init()}();
//# sourceMappingURL=index.e34d1904.js.map
