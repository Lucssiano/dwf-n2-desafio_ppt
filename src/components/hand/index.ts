import rock from '../../img/rock.png';
import paper from '../../img/paper.png';
import scissors from '../../img/scissors.png';
/* Me tira errores */

// type HandType = "rock" | "paper" | "scissors";

class Hand extends HTMLElement {
	shadow: ShadowRoot;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const typeOfHand = this.getAttribute('type');
		let imageURL;
		if (typeOfHand == 'rock') imageURL = rock;
		else if (typeOfHand == 'paper') imageURL = paper;
		else if (typeOfHand == 'scissors') imageURL = scissors;
		// const rockImage = require("url:/src/img/rock.png");
		// const image = require(`url:../../src/img/${typeOfHand}.png`);

		this.shadow.innerHTML = `
       <img src="${imageURL}" class="hand-image">
    `;

		const style = document.createElement('style');
		style.innerHTML = `

    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('custom-hand', Hand);
