type Hand = 'rock' | 'paper' | 'scissors';
type Game = {
	computer: Hand,
	user: Hand
}
type Player = 'user' | 'computer';

export const state = {
	data: {
		currentGame: {
			computer: '',
			user: '',
		},
		/* Lista de objetos con jugadas */
		history: [] as Game[],
	},
	listeners: [],
	init() {
		// localStorage.removeItem('state');
		// const savedState = localStorage.getItem('state');
		// if (savedState) this.setState(JSON.parse(savedState));
	},
	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
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
	pushToHistory(play: Game){
		const currentState = this.getState();
		currentState.history.push(play);
		this.setState(currentState);
	}
	/* Acá irian las combinaciones de posibles jugadas para que gane la compu o el user */
	/* Ver de sacarle los parametros y tomar los datos del state */
	// whoWins(userPlay, computerPlay){
	// }
};

// state.setPlay('paper', 'computer');
// const currentState = state.getState();
// console.log(currentState);
