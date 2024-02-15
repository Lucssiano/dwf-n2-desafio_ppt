import { initRouter } from './router';
import './components/button';
import './components/hand';
import './components/results-scoreboard';
import './components/result-star';

(function main() {
	const root = document.querySelector('.root');
	if (root) initRouter(root);
})();
