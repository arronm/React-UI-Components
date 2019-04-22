import React, { Component } from 'react';
import './Card.scss';

class CardBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      image: this.props.image,
    };
  }

  render() { 
    return ( 
      <div className='card-banner'>
        <img src={this.state.image} />
      </div>
    );
  }
}
 
export default CardBanner;
