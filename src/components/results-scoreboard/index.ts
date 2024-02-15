class ResultScoreboard extends HTMLElement {
	shadow: ShadowRoot;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	/* El contenedor "results" y "result-star" tiene que tener ${userData} para saber si ganó o perdió, esa userData se la trae del state */
	render() {
		this.shadow.innerHTML = `
    <div class='results winner'>
      <result-star result="winner"></result-star>
      <div class='results__scoreboard'>
        <h4 class='results__scoreboard-title'>Score</h4>
        <p class='results__scoreboard-user'>
          Usuario: <span class='results__scoreboard-user__counter'>1</span>
        </p>
        <p class='results__scoreboard-computer'>
          Computadora <span class='results__scoreboard-computer__counter'>1</span>
        </p>
      </div>
      <custom-button>Volver a jugar</custom-button>      
    </div>
    `;

		const style = document.createElement('style');
		style.innerHTML = `
        .results {
        }
        .results__scoreboard {
        }
        .results__scoreboard-title {
        }
        .results__scoreboard-user {
        }
        .results__scoreboard-user__counter {
        }
        .results__scoreboard-computer {
        }
        .results__scoreboard-computer__counter {
        } 
    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('results-scoreboard', ResultScoreboard);
