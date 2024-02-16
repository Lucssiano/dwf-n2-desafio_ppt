import { state } from '../../state';

export function gamePage(params) {
	const div = document.createElement('div');
	div.classList.add('game-container');

	div.innerHTML = `
		<div class="hands-game-container computer-hands rotate">
			<custom-hand type="rock" class="computer-hand"></custom-hand>
			<custom-hand type="paper" class="computer-hand"></custom-hand>
			<custom-hand type="scissors" class="computer-hand"></custom-hand>
		</div>
		<div class="timer-container">
			<div class="loader"></div>
			<div class="timer__counter"></div>
		</div>
		<div class="hands-game-container user-hands">
			<custom-hand type="rock" class="user-hand"></custom-hand>
			<custom-hand type="paper" class="user-hand"></custom-hand>
			<custom-hand type="scissors" class="user-hand"></custom-hand>
		</div>
  `;

	/* <results-scoreboard></results-scoreboard> */

	const userHandsEl = div.querySelector('.user-hands')?.querySelectorAll('custom-hand') || []; // Esto es un NodeList // Tengo que poner el || [] porque sino me marca como que puede ser undefined
	const userHandsArray = Array.from(userHandsEl); // Transformo la NodeList en un Array

	const timerContainerEl = div.querySelector('.timer-container');
	const timerCounterEl = div.querySelector('.timer__counter');
	let counter = 3;

	const computerHandsEl = div.querySelector('.computer-hands')?.querySelectorAll('custom-hand') || []; // Esto es un NodeList // Tengo que poner el || [] porque sino me marca como que puede ser undefined
	const computerHandsArray = Array.from(computerHandsEl); // Transformo la NodeList en un Array

	const interval = setInterval(() => {
		/* Se queda mucho tiempo con el 3 y no avanza como por 2 segundos, averiguar por qué */
		if (timerCounterEl) timerCounterEl.textContent = counter.toString();
		counter--;
		if (counter < 0) {
			timerContainerEl?.remove();
			checkHandMovement(userHandsArray);
			makeComputerMovement(computerHandsArray);
			saveGame();
			// showResults(div); /* Funcion para mostrar los resultados luego de la jugada, pero previamente se debe chequear si terminó la partida */
			// decideWinner(); /* Ver de ponerla en el state */
			clearInterval(interval);
		}
		/* Ver de agregar contador durante la partida, tanto para el usuario cómo para la computadora */
		/* Tengo que agregar el uso del state */
	}, 1000);

	// <div class="results-container"></div>

	userHandsArray.forEach((hand) => hand.addEventListener('click', () => toggleHandClasses(userHandsArray, hand, 'user')));

	return div;
}

function checkHandMovement(handsArray) {
	const noHandIsActive = handsArray.every((hand) => !(hand as Element).classList.contains('active'));
	if (noHandIsActive) {
		const paperHand = handsArray.find((hand) => (hand as Element).getAttribute('type') == 'paper');
		toggleHandClasses(handsArray, paperHand, 'user');
	}
}

function toggleHandClasses(handsArray, activeHand, player) {
	activeHand.classList.add('active');
	const inactiveHands = handsArray.filter((h) => h !== activeHand);
	inactiveHands.forEach((inactiveHand) => inactiveHand.classList.add('inactive'));
	const handType = activeHand.getAttribute('type') || 'rock';
	activeHand.classList.add(handType);

	state.setPlay(handType, player);
}

function makeComputerMovement(computerHandsArray) {
	const numberBetween0and2 = Math.floor(Math.random() * 3);
	const handToMove = computerHandsArray[numberBetween0and2];
	toggleHandClasses(computerHandsArray, handToMove, 'computer');
}

function saveGame(){
	const currentGame = state.getState().currentGame;
	const play = {
		computer: currentGame.computer,
		user: currentGame.user
	}
	state.pushToHistory(play);
}

// function showResults(container) {
// 	const resultScoreboard = document.createElement('results-scoreboard');
// 	setTimeout(() => {
// 		container.appendChild(resultScoreboard);
// 	}, 2000);
// }
