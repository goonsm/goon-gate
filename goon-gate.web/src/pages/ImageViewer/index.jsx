import React, { Component } from 'react';

import Header from 'sections/Header';
import Footer from 'sections/Footer';
import IPFSImageWrapper from 'sections/IPFSImageWrapper';

import './index.css';

export default class ImageViewer extends Component {
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
