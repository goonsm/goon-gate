import React, { Component } from 'react';

import Header from 'sections/Header';
import ImageUploader from 'sections/ImageUploader';
import Footer from 'sections/Footer';
import './index.css';

export default class Upload extends Component {
	render() {
		return (
			<div className="Diffy">
				<Header/>
				<ImageUploader/>
				<Footer/>
			</div>
		);
	}
}
