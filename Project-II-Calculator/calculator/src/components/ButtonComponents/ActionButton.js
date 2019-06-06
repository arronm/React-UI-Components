import React, { Component } from 'react';
import './Button.scss';

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.operator = this.props.operator;
    this.updateCalculation = this.updateCalculation.bind(this);
  }

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
      <div className={`ActionButton ${this.props.buttonStyle}`}>
        <input type='button' onClick={this.updateCalculation} data-operator={this.operator} value={displayValue} />
      </div>
     );
  }
}
 
export default ActionButton;
