import React, { Component } from 'react';
import './Button.scss';

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.operator = this.props.operator;
    this.updateCalculation = this.updateCalculation.bind(this);
  }

  // When an action button is clicked:
  // -- If operator = '=', perform calculations
  // -- Else add operator to calculation string

  updateCalculation(e) {
    this.props.updateCalculation(e.target.value);
  }

  render() { 
    return ( 
      <div className='ActionButton'>
        <input type='button' onClick={this.updateCalculation} value={this.operator} />
      </div>
     );
  }
}
 
export default ActionButton;
