import React, {
	Component
} from 'react';

import Header from 'sections/Header';
import Footer from 'sections/Footer';

import './index.css';

export default class Home extends Component {

	render() {
		return(
			<div className="Home">
				<Header/>

				<Footer />
			</div>
		);
	}
}
