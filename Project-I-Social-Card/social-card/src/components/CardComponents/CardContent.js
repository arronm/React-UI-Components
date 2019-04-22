import React, { Component } from 'react';
import './Card.scss';

class CardContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.children,
    };
  }

  render() {
    return (
      <div className='card-content'>
        {this.state.content}
      </div>
    );
  }
}

export default CardContent;
