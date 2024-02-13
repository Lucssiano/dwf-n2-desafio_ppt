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
		 <div class="hands-game-container rotate">
				<custom-hand type="rock" class="computer-hand"></custom-hand>
				<custom-hand type="paper" class="computer-hand"></custom-hand>
				<custom-hand type="scissors" class="computer-hand"></custom-hand>
		</div>
     <div class="timer">
        <span class="timer__counter">3</span>
     </div>
     <div class="hands-game-container">
         <custom-hand type="rock" class="user-hand"></custom-hand>
         <custom-hand type="paper" class="user-hand"></custom-hand>
         <custom-hand type="scissors" class="user-hand"></custom-hand>
     </div>
  `;
	// <div class="results-container"></div>

	/* Me da null o undefined*/
	// const hand = div.querySelector('custom-hand');
	// const image = hand?.shadowRoot?.querySelector('img');
	// console.log(image);

	const hands = div.querySelectorAll('custom-hand'); // Esto es un NodeList
	const handsArray = Array.from(hands);

	handsArray.forEach((hand) => {
		hand.addEventListener('click', () => {
			// const handImage = hand.shadowRoot?.querySelector('img');
			hand.classList.toggle('active');
			const inactiveHands = handsArray.filter((h) => h !== hand);
			inactiveHands.forEach((inactiveHand) => inactiveHand.classList.toggle('inactive'));
		});
	});

	return div;
}
