import React, { Component } from 'react';
import Moment from 'react-moment';
import './Header.scss';

class HeaderTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.title,
      handle: this.props.handle,
      timestamp: Date.now(),
     }
  }
  render() { 
    return ( 
      <div className='title'>
        <strong className='title__username'>
          {this.state.title}
        </strong>
        <span className='title__handle'>
          {this.state.handle} &#9679; <Moment format="DD MMM">{this.state.timestamp}</Moment>
        </span>
      </div>
     );
  }
}
 
export default HeaderTitle;
