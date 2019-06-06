import React, { Component } from 'react';
import './Button.scss';

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.number = this.props.number;
    this.updateCalculation = this.updateCalculation.bind(this);
  }

  updateCalculation(e) {
    this.props.updateCalculation(e.target.value);
  }

  render() { 
    return (
      <div className={`NumberButton ${this.props.buttonStyle}`}>
        <input onClick={this.updateCalculation} type='button' value={this.number} />
      </div>
     );
  }
}
 
export default NumberButton;
