import React, { Component } from "react";

import ImageUploader from "sections/ImageUploader";

import "./index.css";

export default class Upload extends Component {
	render() {
		return (
			<div className="Diffy">
				<ImageUploader />
			</div>
		);
	}
}
