import React, { Component } from 'react';
import './Button.scss';

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.number = this.props.number;
    this.updateCalculation = this.updateCalculation.bind(this);
  }

  // On click:
  // -- Add number to current calculation string

  updateCalculation(e) {
    this.props.onUpdateCalculation(e.target.number);
  }

  render() { 
    return (
      <div className='NumberButton'>
        <button onClick={() => this.props.updateCalculation(this.number)}>{this.number}</button>
      </div>
     );
  }
}
 
export default NumberButton;
