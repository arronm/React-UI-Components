import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      tweets: 6,
      likes: 4,
    }
  }

  retweet = () => {
    this.setState({
      ...this.state,
      tweets: this.state.tweets + 1,
    });
  }

  like = () => {
    this.setState({
      ...this.state,
      likes: this.state.likes + 1,
    })
  }

  render() {
    return (
      <div className='Footer'>
        <span><i className='fa fa-comment' /></span>
        <span><i className='fa fa-sync-alt' onClick={this.retweet} />{this.state.tweets}</span>
        <span><i className='fa fa-heart' onClick={this.like} />{this.state.likes}</span>
        <span><i className='fa fa-envelope' /></span>
      </div>
    )
  }
}

export default Footer;
