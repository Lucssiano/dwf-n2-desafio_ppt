import { initRouter } from './router';
import './components/button';
import './components/hand';

(function main() {
	const root = document.querySelector('.root');
	if (root) initRouter(root);
})();
