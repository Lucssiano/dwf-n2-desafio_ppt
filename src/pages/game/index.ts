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
		<div class="middle-game-section">
		  <div class="participants-scoreboard">
				<div class="middle-game-section__counter">
					<h4 class="counter-title">Computadora</h4>
					<p class="counter-number computer">0</p>
				</div>
				<div class="middle-game-section__counter">
					<h4 class="counter-title">Usuario</h4>
					<p class="counter-number user">0</p>
				</div>
			</div>
			<div class="timer-container">
				<div class="loader"></div>
				<div class="timer__counter"></div>
			</div>
		</div>
		<div class="hands-game-container user-hands">
			<custom-hand type="rock" class="user-hand"></custom-hand>
			<custom-hand type="paper" class="user-hand"></custom-hand>
			<custom-hand type="scissors" class="user-hand"></custom-hand>
		</div>
  `;

	startGame(div);

	div.addEventListener('playAgain', () => {
		resetGame(div);
	});

	return div;
}

function resetGame(container) {
	const playerCounters = Array.from(container.querySelectorAll('.counter-number'));
	playerCounters.forEach((counter) => ((counter as HTMLElement).innerText = '0'));

	const userHandsArray = Array.from(container.querySelector('.user-hands')?.querySelectorAll('custom-hand'));
	const computerHandsArray = Array.from(container.querySelector('.computer-hands')?.querySelectorAll('custom-hand')); // Es una NodeList, por eso la transformo
	removeHandsClasses(userHandsArray);
	removeHandsClasses(computerHandsArray);

	startGame(container);
}

function startGame(container) {
	const userHandsArray = Array.from(container.querySelector('.user-hands')?.querySelectorAll('custom-hand'));
	const computerHandsArray = Array.from(container.querySelector('.computer-hands')?.querySelectorAll('custom-hand')); // Es una NodeList, por eso la transformo

	const timerContainerEl = container.querySelector('.timer-container');
	const timerCounterEl = container.querySelector('.timer__counter');
	let counter = 3;

	const interval = setInterval(() => {
		timerContainerEl.classList.remove('inactive');
		/* Se queda mucho tiempo con el 3 y no avanza como por 2 segundos, averiguar por qué */
		if (timerCounterEl) timerCounterEl.textContent = counter.toString();
		counter--;
		if (counter < 0) {
			timerContainerEl?.classList.toggle('inactive');
			checkHandMovement(userHandsArray);
			makeComputerMovement(computerHandsArray);
			checkPlayWinner(container);
			clearInterval(interval);
		}
	}, 1000);

	/* Puedo hacer que las funciones me devuelvan la mano que se utilizo */

	userHandsArray.forEach((hand) => {
		(hand as HTMLElement).addEventListener('click', (e) => {
			e.stopImmediatePropagation();
			toggleHandClasses(userHandsArray, hand, 'user');
		});
	});
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

function checkPlayWinner(container) {
	const winner = state.whoWinsPlay();
	if (winner !== 'draw') {
		const playerCounterEl = container.querySelector(`.counter-number.${winner}`) as HTMLElement;
		const playerCounterString = playerCounterEl?.textContent || '0';
		let playerCounterNumber = parseInt(playerCounterString);
		playerCounterNumber++;
		playerCounterEl.innerText = playerCounterNumber.toString();
	}
	checkEndGame(container);
}

function checkEndGame(container) {
	const userCounterEl = parseInt(container.querySelector('.counter-number.user').textContent);
	const computerCounterEl = parseInt(container.querySelector('.counter-number.computer').textContent);

	if (userCounterEl == 3 || computerCounterEl == 3) {
		/* Creo que el contador deberia manejarlo con el state y la logica de cuando se suma 1 */
		// state.whoWinsGame();
		// userCounterEl == 3 ? state.addWin('user') : state.addWin('computer');
		showResults(container);
	} else {
		const userHandsArray = Array.from(container.querySelector('.user-hands')?.querySelectorAll('custom-hand'));
		const computerHandsArray = Array.from(container.querySelector('.computer-hands')?.querySelectorAll('custom-hand'));

		setTimeout(() => {
			removeHandsClasses(userHandsArray);
			removeHandsClasses(computerHandsArray);
			startGame(container);
		}, 2000);
	}
}

function removeHandsClasses(array) {
	array.forEach((hand) => {
		(hand as any).classList.remove('active');
		(hand as any).classList.remove('inactive');
	});
}

function showResults(container) {
	const resultScoreboard = document.createElement('results-scoreboard');
	setTimeout(() => {
		container.appendChild(resultScoreboard);
	}, 2000);
}
