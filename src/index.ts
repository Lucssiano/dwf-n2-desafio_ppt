import { initRouter } from './router';
import './components/button';

(function main() {
	const root = document.querySelector('.root');
	if (root) initRouter(root);
})();
