import React, {
	Component
} from 'react';

import InputSubmit from 'react-input-submit';
import './index.css';
import { QRCode } from 'react-qr-svg';
import Dropzone from 'react-dropzone';

import {
	readFile,
	readStream
} from 'utils/FileUtils';

import {
	ipfsNode
} from 'api';

const {location} = window;

export default class ImageUploader extends Component {

	constructor() {
		super();
		this.state = {
			returnedFromWrite: null,
			imageData: null
		};
	}

	uploadToIPFS = async (fileBlob) => {
		if(!ipfsNode.isOnline()) return;

		const base64Data = await readFile(fileBlob);

		const buffer = Buffer.from(base64Data.result);

		const response = await ipfsNode.files.add([buffer]);

		this.setState({
			imageData: base64Data.result,
			returnedFromWrite: response
		});
	}

	getFromIPFS = async (hash) => {
		if(!ipfsNode.isOnline()) return;

		const response = await ipfsNode.files.cat(hash);

		const data = await readStream(response);

		this.setState({
			readData: data
		});
	}

	onDrop = (acceptedFiles) => {
		this.uploadToIPFS(acceptedFiles[0]);
	}

	render() {
		return(
			<div className="ImageUploader">
				<div className="uploadImage">
					<Dropzone
						className="dropZone"
						activeClassName="dropZoneActive"
						onDrop={this.onDrop}
					>
						<div className="dropText">
							Drop images you would like to share, here.
						</div>
					</Dropzone>
				</div>
				<div className="ipfsFileData">
					{this.state.returnedFromWrite &&
              <div>
              	<span className="hash">
					<span> Uploaded! Please copy this link to share! </span>
					<input className="hashLink" onClick={(event) => event.target.select()} type="text" value={location.href + "/image/" +
					this.state.returnedFromWrite[0].hash}/>
              	</span>
				  <a href={location.href + "/image/" + this.state.returnedFromWrite[0].hash}>
					<QRCode
						bgColor="#FFFFFF"
						fgColor="#000000"
						level="Q"
						style={{ width: 256 }}
						value={location.href + "/image/" + this.state.returnedFromWrite[0].hash}
					/>
				  </a>
              </div>
					}
				</div>
			</div>
		);
	}
}
