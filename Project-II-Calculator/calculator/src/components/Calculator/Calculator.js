import React, { Component } from 'react';
import './Calculator.scss';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import Buttons from '../Buttons/Buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      calculation: '0',
      calculated: false,
    }
    this.updateCalculation = this.updateCalculation.bind(this);

    // TODO: Probably a better way to manage these functions, perhaps eval?
    this.operators = {
      "+": (operation) => {
        const numbers = operation[0].split("+");
        const result = parseInt(numbers[0]) + parseInt(numbers[1]);
        const calculation = operation.input.replace(operation[0], result);
        return calculation;
      },
      "*": (operation) => {
        const numbers = operation[0].split("*");
        const result = parseInt(numbers[0]) * parseInt(numbers[1]);
        const calculation = operation.input.replace(operation[0], result);
        return calculation;
      },
      "/": (operation) => {
        const numbers = operation[0].split("/");
        const result = parseInt(numbers[0]) / parseInt(numbers[1]);
        const calculation = operation.input.replace(operation[0], result);
        return calculation;
      },
      "-": (operation) => {
        const numbers = operation[0].split("-");
        const result = parseInt(numbers[0]) - parseInt(numbers[1]);
        const calculation = operation.input.replace(operation[0], result);
        return calculation;
      },
      "=": true,
      "c": true,
    };
  }

  calculate(calculation) {
    if (!/\D/.exec(calculation)) {
      return calculation;
    }

    let operation = /\d*(\*|\/)\d*/.exec(calculation);
    if (operation === null) {
      operation = /\d*(\+|\-)\d*/.exec(calculation);
      if (!operation) return calculation;
    };

    let operator = /\D/.exec(operation);
    return this.calculate(this.operators[operator](operation));
  }

  updateCalculation = (string) => {
    if (this.operators[string]) {
      if (string === '=') {
        const result = this.calculate(this.state.calculation);
        this.setState({
          ...this.state,
          calculation: result,
          calculated: true,
        });
        return;
      }

      if (string === 'c') {
        this.setState({
          ...this.state,
          calculation: '0',
          calculated: false,
        });
      } else {
        if (this.operators[this.state.calculation[this.state.calculation.length - 1]]) {
          console.log(this.state.calculation);
          string = this.state.calculation.replace(/.$/, string);
          this.setState({
            ...this.state,
            calculation: string,
            calculated: false,
          });
          return;
        }

        this.setState({
          ...this.state,
          calculation: this.state.calculation === '0' ? '0' : this.state.calculation + string,
          calculated: false,
        });
      }
      return;
    }
    
    if (this.state.calculated) {
      this.setState({
        ...this.state,
        calculation: string,
        calculated: false,
      });
    } else {
      this.setState({
        ...this.state,
        calculation: this.state.calculation === '0' ? string : this.state.calculation + string,
      });
    }
  }

  render() {
    return ( 
      <div className='Calculator'>
        <CalculatorDisplay calculation={this.state.calculation} />
        <Buttons updateCalculation={this.updateCalculation} />
      </div>
     );
  }
}
 
export default Calculator;
