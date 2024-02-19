import { homePage } from './pages/home';
import { rulesPage } from './pages/rules';
import { gamePage } from './pages/game';
// import { resultsPage} from "./pages/results";

const BASE_PATH = '/dwf-n2-desafio_ppt';

function isGithubPages() {
	return location.host.includes('github.io');
}

const routes = [
	{
		path: /\/home/,
		component: homePage,
	},
	{
		path: /\/rules/,
		component: rulesPage,
	},
	{
		path: /\/game/,
		component: gamePage,
	},
	// {
	// 	path: /\/dwf-n2-ejercicio_wizard\/thankyou/,
	// 	/* /\/thankyou/ */
	// 	component: thankYouPage,
	// },
];

export function initRouter(container: Element) {
	function goTo(path) {
		const completePath = isGithubPages() ? BASE_PATH + path : path;
		history.pushState({}, '', completePath);
		handleRoute(completePath);
	}

	function handleRoute(route) {
		const newRoute = isGithubPages() ? route.replace(BASE_PATH, '') : route;
		for (const r of routes) {
			if (r.path.test(newRoute)) {
				const el = r.component({ goTo: goTo });
				if (container.firstChild) container.firstChild.remove();
				container.appendChild(el);
			}
		}
	}

	if (location.pathname === '/' || isGithubPages()) goTo('/home');
	else handleRoute(location.pathname);

	window.onpopstate = () => handleRoute(location.pathname);
}
