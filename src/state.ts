type Hand = 'rock' | 'paper' | 'scissors';
type Player = 'user' | 'computer';
// type Game = {
// 	computer: Hand;
// 	user: Hand;
// };

export const state = {
	data: {
		currentGame: {
			computer: '',
			user: '',
		},

		/* Lista de objetos con jugadas */
		// history: [] as Game[],
		/* Por cada jugada se saca quien gano a partir de whoWins(currentGame.computer, currentGame.user) */
		/* Hago que me devuelva si es el usuario o computer quien gana y utilizo la misma logica en la page  */

		/* Cuando llega a 3 manos ganadas, se debe sumar 1 al contador */
		gameWins: {
			computer: 0,
			user: 0,
		},
	},
	// listeners: [],
	init() {
		// localStorage.removeItem('state');
		// const savedState = localStorage.getItem('state');
		// if (savedState) this.setState(JSON.parse(savedState));
	},
	// subscribe(callback: (any) => any) {
	// 	this.listeners.push(callback);
	// },
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;
		// this.listeners.forEach((callback) => callback());
		console.log('nueva data', this.data);
		// console.log('entró');
		// localStorage.setItem('state', JSON.stringify(newState));
	},
	setPlay(hand: Hand, player: Player) {
		const currentState = this.getState();
		currentState.currentGame[player] = hand;
		this.setState(currentState);
	},
	addWin(player: Player) {
		const currentState = this.getState();
		currentState.gameWins[player]++;
		this.setState(currentState);
	},
	// whoWinsGame() {
	// 	const currentState = this.getState();
	// },
	whoWinsPlay() {
		const currentState = this.getState();
		const userPlay = currentState.currentGame.user;
		const computerPlay = currentState.currentGame.computer;

		if (userPlay == computerPlay) return 'draw';

		const userWinsCond1 = userPlay === 'scissors' && computerPlay === 'paper';
		const userWinsCond2 = userPlay === 'paper' && computerPlay === 'rock';
		const userWinsCond3 = userPlay === 'rock' && computerPlay === 'scissors';

		const userWins = userWinsCond1 || userWinsCond2 || userWinsCond3;

		if (userWins) return 'user';
		else return 'computer';
	},
};
