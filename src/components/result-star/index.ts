const stars = {
	winStar: require('url:../../img/win-star.png'),
	loseStar: require('url:../../img/lose-star.png'),
};

class ResultStar extends HTMLElement {
	shadow: ShadowRoot;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		/* Se debe traer del state el dato de si ganó o perdió, para cambiar la imagen y el titulo */
		this.shadow.innerHTML = `
			<div class="star-container">
				<img src=${stars.winStar} alt="Win star" class="star-img"> 
				<h3 class="star-title">Ganaste!</h3> 
      </div>  
				`;
		/* <h3>Perdiste!</h3> */

		const style = document.createElement('style');
		style.innerHTML = `
			.star-container {
				position: relative;
			}
			.star-img {
				width: 250px;
				height: 250px;
			}
			.star-title {
				position: absolute;
				top: 20%;
				left: 30%;
				font-size: 45px;
			}
    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('result-star', ResultStar);
