import React, { Component } from 'react';
import './Button.scss';

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: this.props.operator,
     }
  }

  // When an action button is clicked:
  // -- If operator = '=', perform calculations
  // -- Else add operator to calculation string

  render() { 
    return ( 
      <div className='ActionButton'>
        {this.state.operator}
      </div>
     );
  }
}
 
export default ActionButton;
