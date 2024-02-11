export function rulesPage(params){
    const div = document.createElement('div');
    div.classList.add("home-container")
  
      div.innerHTML = `
        <p class="paragraph">
            Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </p>
        <custom-button>¡Jugar!</custom-button>
        <div class="hands-container">
            <custom-hand type="rock"></custom-hand>
            <custom-hand type="paper"></custom-hand>
            <custom-hand type="scissors"></custom-hand>
        </div>
    `;
  
      const button = div.querySelector('custom-button');
      button?.addEventListener('click', () => params.goTo('/game'));
  
      return div;
}