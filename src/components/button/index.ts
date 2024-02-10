class MyButton extends HTMLElement {
	shadow: ShadowRoot;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
      <button class="button">${this.textContent}</button>
      `;

		const style = document.createElement('style');
		style.innerHTML = `
      .button {
        font-family: 'Odibee Sans', sans-serif;    
        font-size: 45px;
        cursor: pointer;
        padding: 20px 0;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        border: 10px solid #001997;
        background-color: #006CFC;
        color: #D8FCFC;
    
      }
    `;

		/*     
     max-width: 405px;
    display: block;
        margin: 0 auto; */

		this.shadow.appendChild(style);
	}
}

customElements.define('custom-button', MyButton);
