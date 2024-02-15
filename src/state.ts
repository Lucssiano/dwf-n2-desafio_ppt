type Hand = 'rock' | 'paper' | 'scissors';
type Player = 'user' | 'computer';

export const state = {
	data: {
		currentGame: {
			computer: '',
			user: '',
		},
		/* Lista de objetos con jugadas */
		history: [{}],
	},
	listeners: [],
	init() {
		// localStorage.removeItem('state');
		// const savedState = localStorage.getItem('state');
		// if (savedState) this.setState(JSON.parse(savedState));
	},
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;
		this.listeners.forEach((callback) => callback());
		console.log('nueva data', this.data);
		// localStorage.setItem('state', JSON.stringify(newState));
	},
	setPlay(hand: Hand, player: Player) {
		const currentState = this.getState();
		currentState.currentGame[player] = hand;
		this.setState(currentState);
	},
	// pushToHistory(){
	// }
	/* Acá irian las combinaciones de posibles jugadas para que gane la compu o el user */
	/* Ver de sacarle los parametros y tomar los datos del state */
	// whoWins(userPlay, computerPlay){
	// }
};

// state.setPlay('paper', 'computer');
// const currentState = state.getState();
// console.log(currentState);
