import React, { Component } from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

// TODO: How to handle linking with https and displaying without https

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      image: this.props.image,
      content: this.props.children,
      link: this.props.link,
     }
  }
  render() {
    return ( 
      <div className='Card'>
        <div className="Card__wrapper">
          <a href={this.state.link} target='_blank' rel="noopener noreferrer">
            <CardBanner image={this.state.image} />
            <CardContent>
              <strong>Get started with React</strong>
              {this.state.content}
              <span>{this.state.link}</span>
            </CardContent>
          </a>
        </div>
      </div>
     );
  }
}
 
export default CardContainer;
