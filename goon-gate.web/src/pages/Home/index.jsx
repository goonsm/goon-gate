import React, { Component } from 'react';

//import Sections
import Footer from 'sections/Footer';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      returnedFromIPFS: null
    };
  }

  componentDidMount() {
    // @louisgv actually implement file upload!
    this.saveBufferToIPFS(window.ipfs.Buffer.from(['ok']));
  }

  saveBufferToIPFS(someBuffer) {
    const returned = window.ipfs.files.add(window.ipfs.Buffer.from(someBuffer));
    returned.then((data) => {
      this.setState({
        ...this.state,
        returnedFromIPFS: data
      });
    });
  }

  render() {
    // TODO: @louisgv implement basic Home from Figma design mock.
    // I have implemented IPFS storage with the saveBufferToIPFS
    // function -- we can access the data from it here via React state.
    return (
      <div className="Home">
        {this.state.returnedFromIPFS &&
            <div>
              {JSON.stringify(this.state.returnedFromIPFS)}
            </div>}
        <Footer />
      </div>
    );
  }
}
