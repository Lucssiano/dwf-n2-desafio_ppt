export function gamePage(params) {
	const div = document.createElement('div');
	div.classList.add('game-container');

	div.innerHTML = `
		<div class="hands-game-container rotate">
			<custom-hand type="rock" class="computer-hand"></custom-hand>
			<custom-hand type="paper" class="computer-hand"></custom-hand>
			<custom-hand type="scissors" class="computer-hand"></custom-hand>
		</div>
		<div class="timer">
			<span class="timer__counter"></span>
		</div>
		<div class="hands-game-container">
			<custom-hand type="rock" class="user-hand"></custom-hand>
			<custom-hand type="paper" class="user-hand"></custom-hand>
			<custom-hand type="scissors" class="user-hand"></custom-hand>
		</div>
  `;

  
	let counter = 3;
	// const timerContainer = div.querySelector(".timer");
	const timerCounter = div.querySelector(".timer__counter");
	const interval = setInterval(() => {
		if (timerCounter) timerCounter.textContent = counter.toString();
		counter--;
		if (counter < 0) clearInterval(interval);
	}, 1000);

	// <div class="results-container"></div>

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
