import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }

  render() {
    return (
      <div>
        <strong>{this.state.strong}</strong>
        <p>{this.state.paragraph}</p>
      </div>
    )
  }
}

export default Footer;
