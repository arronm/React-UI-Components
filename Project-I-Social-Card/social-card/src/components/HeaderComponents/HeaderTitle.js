import React, { Component } from 'react';
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
      <div class="title">
        <h1>
          {this.state.title}
        </h1>
        <span>
          {this.state.handle} * {this.state.timestamp}
        </span>
      </div>
     );
  }
}
 
export default HeaderTitle;
