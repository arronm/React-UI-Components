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
      <div className='Footer'>
        <span><i className='fa fa-comment' /></span>
        <span><i className='fa fa-sync-alt' />6</span>
        <span><i className='fa fa-heart' />4</span>
        <span><i className='fa fa-envelope' /></span>
      </div>
    )
  }
}

export default Footer;
