export function gamePage(params) {
	const div = document.createElement('div');
	div.classList.add('game-container');

	// let counter = 4;
	// const interval = setInterval(() => {
	// 	counter = counter - 1;
	// 	if (counter == 0) clearInterval(interval);
	// 	console.log(counter);
	// }, 1000);
	/* ${counter} */

	div.innerHTML = `
     <div class="timer">
        <span class="timer__counter">3</span>
     </div>
     <div class="hands-container">
         <custom-hand type="rock"></custom-hand>
         <custom-hand type="paper"></custom-hand>
         <custom-hand type="scissors"></custom-hand>
     </div>
  `;
	// <div class="results-container"></div>

	/* Me da null o undefined*/
	// const customHandImages = div.querySelectorAll('custom-hand');
	// customHandImages.forEach((hand) => hand.shadowRoot?.querySelector('img')?.classList.toggle('prueba'));

	return div;
}
