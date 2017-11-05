import React from 'react';
import IPFSImage from 'components/IPFSImage';

import './index.css';

const {location} = window;

export default class IPFSImageWrapper extends React.Component {
  getLastRouteFromURL() {
    const urlParts = location.href.split("/") ;
    return urlParts[urlParts.length - 1];
  }

  render() {
    return(
      <div className="IPFSImageWrapper">
        <IPFSImage hash={this.getLastRouteFromURL()}/>
      </div>
    )
	}
}
