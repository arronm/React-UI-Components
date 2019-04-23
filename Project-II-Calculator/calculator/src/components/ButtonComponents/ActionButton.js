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
    this.props.updateCalculation(e.target.dataset.operator);
  }

  render() {
    let displayValue = this.operator;
    if (displayValue === 'c') {
      displayValue = 'clear';
    }
    if (displayValue === '/') {
      displayValue = '÷';
    }
    if (displayValue === '*') {
      displayValue = '×';
    }
    return ( 
      <div className={`ActionButton ${this.props.className || ''}`}>
        <input type='button' onClick={this.updateCalculation} data-operator={this.operator} value={displayValue} />
      </div>
     );
  }
}
 
export default ActionButton;
