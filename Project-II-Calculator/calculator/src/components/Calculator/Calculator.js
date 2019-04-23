import React, { Component } from 'react';
import './Calculator.scss';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import Buttons from '../Buttons/Buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      calculation: '0',
     }
    this.updateCalculation = this.updateCalculation.bind(this);
  }

  updateCalculation = (number) => {
    this.setState({
      ...this.state,
      calculation: this.state.calculation === '0' ? number : this.state.calculation + number,
    })
  }

  render() { 
    return ( 
      <div>
        Calculator: {this.state.calculation}
        <CalculatorDisplay calculation={this.state.calculation} />
        <Buttons updateCalculation={this.updateCalculation} />
      </div>
     );
  }
}
 
export default Calculator;
