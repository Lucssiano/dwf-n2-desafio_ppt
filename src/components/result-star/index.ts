import { state } from '../../state';

const stars = {
	winStar: require('url:../../img/win-star.png'),
	loseStar: require('url:../../img/lose-star.png'),
};

class ResultStar extends HTMLElement {
	shadow: ShadowRoot;
	win: boolean;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		console.log(this.parentElement);
		console.log(this.parentElement?.classList.contains('loser'));
		console.log(this.parentElement?.classList.contains('winner'));
		// this.win = this.parentElement?.classList.contains('winner') || false;
		// this.win = this.parentElement?.getAttribute('result') === 'user';
		// console.log(this.parentElement?.getAttribute('result'));
		// console.log(this.win);
		this.render();
	}

	render() {
		this.shadow.innerHTML = ` <img src="${this.win ? stars.winStar : stars.loseStar}" alt="Win star" class="star-img"> `;
		/* No puedo cambiar la imagen, no me funciona bien */

		const style = document.createElement('style');
		style.innerHTML = `
			.star-img {
				width: 250px;
				height: 250px;
			}
    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('result-star', ResultStar);
