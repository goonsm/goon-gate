import React, {
	Component
} from 'react';

import InputSubmit from 'react-input-submit';
import './index.css';
import { QRCode } from 'react-qr-svg';

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

	render() {
		return(
			<div className="ImageUploader">
        <div className="uploadImage">
            <form>
              <input type="file" name="photo" id="photo"
                onChange={({target}) => {
                  this.uploadToIPFS(target.files[0])}
                }/>
            </form>
          </div>
          <div className="ipfsFileData">
            {this.state.returnedFromWrite &&
              <div>
                <span className="path">
                  path: {this.state.returnedFromWrite[0].path}
                </span>
                <span className="hash">
                  hash: {this.state.returnedFromWrite[0].hash}
                </span>
              <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ width: 256 }}
                    value={location.href + "/" + this.state.returnedFromWrite[0].hash}
              />
              </div>
            }
            
        </div>
      </div>
			);
		}
	}
