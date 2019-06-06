import React, { Component } from 'react';
import './Display.scss';

class CalculatorDisplay extends Component {
  constructor(props) {
    super(props);
    this.calculation = '0';
  }

  componentWillReceiveProps(nextProps) {
    this.calculation = nextProps.calculation;
  }

  render() {
    return (
      <div className='CalculatorDisplay'>
        <span>{this.calculation}</span>
      </div>
    );
  }
}

export default CalculatorDisplay;
