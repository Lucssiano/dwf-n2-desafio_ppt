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
		/* Se debe traer del state el dato de si ganó o perdió */
		/* Ver si conviene poner la imagen en un background-image de un contenedor para poder posicionar bien el titulo */
		this.shadow.innerHTML = `
      <img src=${stars.winStar} alt="Win star"> 
      
    `;
		/* <h3>Ganaste!</h3> */
		/* <h3>Perdiste!</h3> */

		const style = document.createElement('style');
		style.innerHTML = `
		
    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('result-star', ResultStar);
