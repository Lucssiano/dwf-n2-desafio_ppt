var e=globalThis,t={},r={},s=e.parcelRequire0eff;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire0eff=s);var o=s.register;o("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,s=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)s.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("bsyEv",function(e,t){e.exports=new URL("rock.99d972ee.png",import.meta.url).toString()}),o("hIjkm",function(e,t){e.exports=new URL("paper.c8d4c533.png",import.meta.url).toString()}),o("NuPtN",function(e,t){e.exports=new URL("scissors.134c3612.png",import.meta.url).toString()}),o("itS45",function(e,t){e.exports=new URL("win-star.15374e79.png",import.meta.url).toString()}),o("26hmP",function(e,t){e.exports=new URL("lose-star.5de9781a.png",import.meta.url).toString()}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.5e7428e7.js","804YT","rock.99d972ee.png","abTdq","paper.c8d4c533.png","8lpQI","scissors.134c3612.png","fi2qB","win-star.15374e79.png","cefbP","lose-star.5de9781a.png"]'));const n={data:{currentGame:{computer:"",user:""},currentGameCounter:{computer:0,user:0,winner:""},gameWins:{computer:0,user:0}},listeners:[],init(){let e=localStorage.getItem("state");e&&this.setState(JSON.parse(e))},resetScoreboard(){localStorage.removeItem("state");let e=this.getState();e.gameWins.computer=0,e.gameWins.user=0,this.setState(e)},subscribe(e){this.listeners.push(e)},getState(){return this.data},setState(e){this.data=e,this.listeners.forEach(e=>e()),console.log("nueva data",this.data),localStorage.setItem("state",JSON.stringify(e))},setPlay(e,t){let r=this.getState();r.currentGame[t]=e,this.setState(r)},addWin(e){let t=this.getState();t.gameWins[e]++,t.currentGameCounter.winner=e,this.setState(t)},resetGameCounter(){let e=this.getState();e.currentGameCounter.user=0,e.currentGameCounter.computer=0,e.currentGameCounter.winner="",this.setState(e)},setPlayWinner(){let e=this.getState(),t=e.currentGame.user,r=e.currentGame.computer;t!=r&&("scissors"===t&&"paper"===r||"paper"===t&&"rock"===r||"rock"===t&&"scissors"===r?e.currentGameCounter.user++:e.currentGameCounter.computer++,this.setState(e))}};function a(e){let t=Array.from(e.querySelector(".user-hands")?.querySelectorAll("custom-hand")),r=Array.from(e.querySelector(".computer-hands")?.querySelectorAll("custom-hand")),s=e.querySelector(".timer-container"),o=e.querySelector(".timer__counter"),u=3,l=setInterval(()=>{s.classList.remove("inactive"),o&&(o.textContent=u.toString()),--u<0&&(s?.classList.toggle("inactive"),function(e){if(e.every(e=>!e.classList.contains("active"))){let t=e.find(e=>"paper"==e.getAttribute("type"));i(e,t,"user")}}(t),function(e){let t=e[Math.floor(3*Math.random())];i(e,t,"computer")}(r),n.setPlayWinner(),function(e){let t=n.getState().currentGameCounter;if(3==t.user||3==t.computer){let r=3==t.user?"user":"computer";n.addWin(r),function(e,t){let r=document.createElement("results-scoreboard");r.setAttribute("result",t),setTimeout(()=>{e.appendChild(r)},2e3)}(e,r)}else{let t=Array.from(e.querySelector(".user-hands")?.querySelectorAll("custom-hand")),r=Array.from(e.querySelector(".computer-hands")?.querySelectorAll("custom-hand"));setTimeout(()=>{c(t),c(r),a(e)},2e3)}}(e),clearInterval(l))},1e3);t.forEach(e=>{e.addEventListener("click",r=>{r.stopImmediatePropagation(),i(t,e,"user")})})}function i(e,t,r){t.classList.add("active"),e.filter(e=>e!==t).forEach(e=>e.classList.add("inactive"));let s=t.getAttribute("type")||"rock";t.classList.add(s),n.setPlay(s,r)}function c(e){e.forEach(e=>{e.classList.remove("active"),e.classList.remove("inactive")})}const u="/dwf-n2-desafio_ppt";function l(){return location.host.includes("github.io")}const d=[{path:/\/home/,component:function(e){let t=document.createElement("div");t.classList.add("home-container"),t.innerHTML=`
    <main class="main-section">
      <h1 class="title">Piedra Papel \xf3 Tijera</h1>
      <custom-button>Empezar</custom-button>
    </main>
    <div class="hands-container">
      <custom-hand type="rock"></custom-hand>
      <custom-hand type="paper"></custom-hand>
      <custom-hand type="scissors"></custom-hand>
    </div>
  `;let r=t.querySelector("custom-button");return r?.addEventListener("click",()=>e.goTo("/rules")),t}},{path:/\/rules/,component:function(e){let t=document.createElement("div");t.classList.add("rules-container"),t.innerHTML=`
        <div class="content">
          <p class="paragraph">
              Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
          </p>
          <p class="paragraph">
              El primer jugador en ganar 3 rondas es el ganador del juego.
          </p>
          <custom-button size="small">\xa1Jugar!</custom-button>
          <custom-button size="small" color="red" class="restart-button">Reiniciar estadisticas</custom-button>
        </div>
        <div class="hands-container">
            <custom-hand type="rock"></custom-hand>
            <custom-hand type="paper"></custom-hand>
            <custom-hand type="scissors"></custom-hand>
        </div>
    `;let r=t.querySelector(".restart-button");r?.addEventListener("click",()=>{n.resetScoreboard()});let s=t.querySelector("custom-button");return s?.addEventListener("click",()=>e.goTo("/game")),t}},{path:/\/game/,component:function(e){let t=document.createElement("div");return t.classList.add("game-container"),t.innerHTML=`
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
  `,a(t),t.addEventListener("playAgain",()=>{(function(e){n.resetGameCounter();let t=Array.from(e.querySelector(".user-hands")?.querySelectorAll("custom-hand")),r=Array.from(e.querySelector(".computer-hands")?.querySelectorAll("custom-hand"));c(t),c(r),a(e)})(t)}),t.addEventListener("goToRules",()=>{n.resetGameCounter(),e.goTo("/rules")}),t}}];class m extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.size=this.getAttribute("size")||"",this.color=this.getAttribute("color")||"",this.render()}render(){this.shadow.innerHTML=`
    <button class="button ${this.size} ${this.color}">${this.textContent}</button>
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
        transition: 0.5s;
      }
      @media (min-width: 769px) {
        .button:hover {
          border-color: #009048;
          background-color: #000;
        }
      }
      .small {
        font-size: 35px;
        padding: 10px;
        border: 6px solid #001997;
      }
      .violet {
        background-color: #201658;
        border: 6px solid #000;
        color: #D8FCFC;
      }
      .red {
        background-color: #9B4444;
        border: 6px solid #000;
        color: #D8FCFC;
        margin-top: 15px;
      }
    `,this.shadow.appendChild(e)}}customElements.define("custom-button",m);const p={rock:s("bsyEv"),paper:s("hIjkm"),scissors:s("NuPtN")};class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("type")||"rock";this.shadow.innerHTML=`
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
    `,this.shadow.appendChild(e)}}customElements.define("players-scoreboard",g);class b extends HTMLElement{constructor(){super(),this.computerCounter=n.getState().gameWins.computer,this.userCounter=n.getState().gameWins.user,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=n.getState();this.computerCounter=e.gameWins.computer,this.userCounter=e.gameWins.user,this.win="user"===e.currentGameCounter.winner,this.render()}render(){this.shadow.innerHTML=`
    <div class='results ${this.win?"winner":"loser"}'>
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
      <custom-button size="small" class="play-again-button">Volver a jugar</custom-button>     
      <custom-button size="small" color="violet" class="go-to-menu-button">Volver al inicio</custom-button>     
      </div>
      `;let e=this.shadow.querySelector(".play-again-button");e?.addEventListener("click",()=>{let e=new CustomEvent("playAgain");this.parentElement?.dispatchEvent(e),this.remove()});let t=this.shadow.querySelector(".go-to-menu-button");t?.addEventListener("click",()=>{let e=new CustomEvent("goToRules");this.parentElement?.dispatchEvent(e),this.remove()});let r=document.createElement("style");r.innerHTML=`
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
          height: 160px;
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
    `,this.shadow.appendChild(r)}}customElements.define("results-scoreboard",b);const f={winStar:s("itS45"),loseStar:s("26hmP")};class v extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.win="user"===n.getState().currentGameCounter.winner,this.render()}render(){this.shadow.innerHTML=` 
		<div class="star-container">
			<img src="${this.win?f.winStar:f.loseStar}" alt="Win star" class="star-img"> 
		</div>
			`;let e=document.createElement("style");e.innerHTML=`
			.star-img {
				width: 250px;
				height: 250px;
			}
    `,this.shadow.appendChild(e)}}customElements.define("result-star",v),function(){let e=document.querySelector(".root");e&&(n.init(),function(e){function t(e){let t=l()?u+e:e;history.pushState({},"",t),r(t)}function r(r){let s=l()?r.replace(u,""):r;for(let r of d)if(r.path.test(s)){let s=r.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(s)}}"/"===location.pathname||l()?t("/home"):r(location.pathname),window.addEventListener("popstate",function(e){r(location.pathname),n.resetGameCounter()}),window.addEventListener("load",()=>{r(location.pathname),n.resetGameCounter()})}(e))}();
//# sourceMappingURL=index.5e7428e7.js.map
