import React, { Component } from "react";

import IPFSImageWrapper from "sections/IPFSImageWrapper";

import "./index.css";

export default class ImageViewer extends Component {
	render() {
		return (
			<div className="ImageViewer">
				<IPFSImageWrapper />
			</div>
		);
	}
}
