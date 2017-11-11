import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from 'registerServiceWorker';

import TransitionGroup from 'react-transition-group/TransitionGroup';

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import AnimatedSwitch from 'components/AnimatedSwitch';

import Home from 'pages/Home';
import Diffy from 'pages/Diffy';
import ImageViewer from 'pages/ImageViewer';
import Commit from 'pages/Commit';

// Global sections:
import Header from "sections/Header";
import Footer from "sections/Footer";

import './index.css';

const headerRoutes = [
	{ path: '/diffy',  name: 'Diffy'},
	{ path: '/commit',  name: 'Commit'}
]

// Global page, so it also include some section
const App = () => (
	<Router basename="/goon-gate">
		<div>
			<Header routes={headerRoutes} />
			<TransitionGroup>
				<AnimatedSwitch>
					<Route exact path="/" component={Home} />
					<Route exact path="/diffy" component={Diffy} />
					<Route path="/diffy/image/*" component={ImageViewer} />
					<Route path="/commit" component={Commit} />
				</AnimatedSwitch>
			</TransitionGroup>
			<Footer />
		</div>
	</Router>
);

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(<App />, rootEl);
	registerServiceWorker();
}

export default App;
