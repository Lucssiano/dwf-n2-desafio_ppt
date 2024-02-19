import { state } from '../../state';

type Background = 'winner' | 'loser';

class ResultScoreboard extends HTMLElement {
	shadow: ShadowRoot;
	computerCounter: number = state.getState().gameWins.computer;
	userCounter: number = state.getState().gameWins.user;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		state.subscribe(() => {
			const currentGameGameWins = state.getState().gameWins;
			// Ver que se haga un cambio en el state, porque no está entrando acá cuando renderiza
			console.log(this.computerCounter, state.getState().gameWins.computer, 'COMPUTER');
			console.log(this.userCounter, state.getState().gameWins.user, 'USER');
			// this.computerCounter !== state.getState().gameWins.computer
			// 	? this.addBackground('loser')
			// 	: this.addBackground('winner');

			this.computerCounter = currentGameGameWins.computer;
			this.userCounter = currentGameGameWins.user;
		  // this.render();		
    });
		this.render();
		// this.render();
	}

	addBackground(background: Background) {
    console.log("entro acá che")
		this.shadowRoot?.querySelector('.results')?.classList.remove('loser');
		this.shadowRoot?.querySelector('.results')?.classList.remove('winner');
		this.shadowRoot?.querySelector('.results')?.classList.add(background);
	}

	/* El contenedor "results" y "result-star" tiene que tener ${userData} para saber si ganó o perdió, esa userData se la trae del state */
	render() {
		this.shadow.innerHTML = `
    <div class='results'>
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
    `;

		const playAgainButtonEl = this.shadow.querySelector('.play-again-button');
		playAgainButtonEl?.addEventListener('click', () => {
			const event = new CustomEvent('playAgain');
			this.parentElement?.dispatchEvent(event);
			this.remove();
		});

		const style = document.createElement('style');
		style.innerHTML = `
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
    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('results-scoreboard', ResultScoreboard);
