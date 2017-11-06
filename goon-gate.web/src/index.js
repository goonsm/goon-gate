import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from 'registerServiceWorker';

import TransitionGroup from 'react-transition-group/TransitionGroup';

import AnimatedSwitch from 'components/AnimatedSwitch';

import Home from 'pages/Home';
import Diffy from 'pages/Diffy';
import ImageViewer from 'pages/ImageViewer';

import {
	Router,
	Route,
} from 'react-router-dom';

import {
	customHistory,
} from 'api';

const App = () => (
	<Router history={customHistory} basename="/">
		<TransitionGroup>
			<AnimatedSwitch>
				<Route exact path="/" component={Home} />
				<Route exact path="/diffy" component={Diffy} />
				<Route path="/diffy/image/*" component={ImageViewer} />
			</AnimatedSwitch>
		</TransitionGroup>
	</Router>
);

export default App;

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(<App />, rootEl);
	registerServiceWorker();
}
