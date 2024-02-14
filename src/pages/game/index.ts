export function gamePage(params) {
	const div = document.createElement('div');
	div.classList.add('game-container');

	div.innerHTML = `
		<div class="hands-game-container rotate">
			<custom-hand type="rock" class="computer-hand"></custom-hand>
			<custom-hand type="paper" class="computer-hand"></custom-hand>
			<custom-hand type="scissors" class="computer-hand"></custom-hand>
		</div>
		<div class="timer-container">
			<div class="loader"></div>
			<div class="timer__counter">3</div>
		</div>
		<div class="hands-game-container">
			<custom-hand type="rock" class="user-hand"></custom-hand>
			<custom-hand type="paper" class="user-hand"></custom-hand>
			<custom-hand type="scissors" class="user-hand"></custom-hand>
		</div>
  `;

	const timerContainer = div.querySelector('.timer-container');
	const timerCounter = div.querySelector('.timer__counter');
	let counter = 3;

	const interval = setInterval(() => {
		/* Se queda mucho tiempo con el 3 y no avanza como por 2 segundos, averiguar por qué */
		if (timerCounter) timerCounter.textContent = counter.toString();
		counter--;
		if (counter < 0) {
			timerContainer?.remove();
			clearInterval(interval);
		}
		/* Tengo que agregar que pasa si el usuario no presiona ninguna mano */
		/* Tengo que agregar la jugada aleatoria de la computadora */
		/* Tengo que agregar el uso del state */
	}, 1000);

	// <div class="results-container"></div>

	const hands = div.querySelectorAll('custom-hand'); // Esto es un NodeList
	const handsArray = Array.from(hands);

	handsArray.forEach((hand) => {
		hand.addEventListener('click', () => {
			hand.classList.add('active');
			const inactiveHands = handsArray.filter((h) => h !== hand);
			inactiveHands.forEach((inactiveHand) => inactiveHand.classList.add('inactive'));
			const handType = hand.getAttribute('type') || 'rock';
			hand.classList.add(handType);
		});
	});

	return div;
}
