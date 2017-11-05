import React from 'react';

import {
	readStream
} from 'utils/FileUtils';

import {
	ipfsNode
} from 'api';

export default class IPFSImage extends React.Component {
	constructor() {
		super();
		this.state = {
			readData: null
		};
	}

	componentDidMount(){ 
		ipfsNode.on('ready', this.getFromIPFS);
	}

  getFromIPFS = async () => {
  	const hash = this.props.hash;
  	if(!ipfsNode.isOnline()){
  		return;
  	}
  	const response = await ipfsNode.files.cat(hash);

  	const data = await readStream(response);

  	this.setState({
  		readData: data
  	});
  };

  render() {
  	return(
  		<div>
  			{this.state.readData &&
            <img src={this.state.readData} alt="Remote"/>
  			}
  		</div>
  	)
  }
}
