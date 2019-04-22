import React, { Component } from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  render() { 
    return ( 
      <div>
        <CardBanner image='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png' />
        <CardContent />
      </div>
     );
  }
}
 
export default CardContainer;
