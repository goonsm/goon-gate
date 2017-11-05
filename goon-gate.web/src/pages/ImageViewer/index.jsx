import React, { Component } from 'react';

import Header from 'sections/Header';
import Footer from 'sections/Footer';
import IPFSImageWrapper from 'sections/IPFSImageWrapper';

import './index.css';

const {location} = window;

export default class ImageViewer extends Component {
	getHashFromURL() {
		const urlParts = location.href.split("/") ;
		return urlParts[urlParts.length - 1];
	}

  render() {
    return (
      <div className="ImageViewer">
        <Header/>
        <IPFSImageWrapper/>
        <Footer/>
      </div>
    );
  }
}
