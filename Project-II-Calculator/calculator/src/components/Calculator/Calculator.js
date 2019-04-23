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

  calculate() {
    // calculate from string
    return 42;
  }

  updateCalculation = (string) => {
    const operators = {
      "+": true,
      "*": true,
      "/": true,
      "-": true,
      "=": true,
      "c": true,
    };

    if (operators[string]) {
      if (string === '=') {
        const result = this.calculate();
        this.setState({
          ...this.state,
          calculation: result,
        });
        return;
      }

      if (string === 'c') {
        this.setState({
          ...this.state,
          calculation: '0',
        });
      } else {
        this.setState({
          ...this.state,
          calculation: this.state.calculation === '0' ? '0' : this.state.calculation + string,
        });
      }
      return;
    }
    
    this.setState({
      ...this.state,
      calculation: this.state.calculation === '0' ? string : this.state.calculation + string,
    });
  }

  render() {
    return ( 
      <div>
        <CalculatorDisplay calculation={this.state.calculation} />
        <Buttons updateCalculation={this.updateCalculation} />
      </div>
     );
  }
}
 
export default Calculator;
