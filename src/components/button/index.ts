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
    `;

		this.shadow.appendChild(style);
	}
}

customElements.define('custom-button', MyButton);
