import React, { Component } from 'react';
import './Header.scss';
import HeaderTitle from './HeaderTitle';

class HeaderContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.title,
      content: this.props.children,
      handle: this.props.handle,
     }
  }
  render() { 
    return ( 
      <div>
        <HeaderTitle title={this.state.title} handle={this.state.handle} />
        <p>{this.state.content}</p>
      </div>
     );
  }
}
 
export default HeaderContent;