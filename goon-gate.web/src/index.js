import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from 'registerServiceWorker';

import TransitionGroup from 'react-transition-group/TransitionGroup';

import AnimatedSwitch from 'components/AnimatedSwitch';
import Home from 'pages/Home';
import Upload from 'pages/Upload';

import {
	Router,
	Route
} from 'react-router-dom';

import {
	customHistory,
} from 'api';

const App = () => (
	<Router history={customHistory} basename="/">
		<TransitionGroup>
			<AnimatedSwitch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/upload" component={Upload}/>
			</AnimatedSwitch>
		</TransitionGroup>
	</Router>
);

export default App;

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(
		<App/>, rootEl);
		registerServiceWorker();
}
