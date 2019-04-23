import React, { Component } from 'react';
import './Calculator.scss';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        Calculator
        <CalculatorDisplay />
        <ActionButton />
        <NumberButton />
      </div>
     );
  }
}
 
export default Calculator;
