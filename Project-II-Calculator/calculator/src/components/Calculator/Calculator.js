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
      lastOperation: '',
    }
    this.updateCalculation = this.updateCalculation.bind(this);

    this.operators = {
      "+": (num1, num2) => num1 + num2,
      "*": (num1, num2) => num1 * num2,
      "/": (num1, num2) => num1 / num2,
      "-": (num1, num2) => num1 - num2,
      "=": true,
      "c": true,
    };
  }

  calculate(calculation) {
    let negative = false;

    if (!/\D/.exec(calculation)) {
      return calculation;
    }

    if (/^\-\d*/.exec(calculation)) {
      calculation = calculation.replace('-', '');
      negative = true;
    }

    let operation = /\d*(\*|\/)\d*/.exec(calculation);
    if (operation === null) {
      operation = /\d*(\+|\-)\d*/.exec(calculation);
      if (!operation) {
        if (negative = true) return '-' + calculation;
        return calculation;
      }
    };

    let operator = /\D/.exec(operation);
    
    if (operation[0][0] === '-') {
      operation[0] = operation[0].replace('-', '');
      negative = true;
    }

    const numbers = operation[0].split(operator);

    if (negative) {
      numbers[0] = '-' + numbers[0];
    }

    const result = this.operators[operator](parseInt(numbers[0], 0), parseInt(numbers[1], 0));
    return this.calculate(operation.input.replace(operation[0], result));

    // Could return eval here, but I feel like that's cheating
    // return eval(this.state.calculation);
  }

  updateCalculation = (string) => {
    if (this.operators[string]) {
      if (string === '=') {
        if (this.state.lastOperation != '') {
          this.setState({
            ...this.state,
            calculation: this.calculate(this.state.calculation + this.state.lastOperation),
            calculated: true,
          });
          return;
        }
        const lastOperation = /\D\d*$/.exec(this.state.calculation)[0];
        const result = this.calculate(this.state.calculation);
        this.setState({
          ...this.state,
          calculation: result,
          calculated: true,
          lastOperation: lastOperation,
        });
        return;
      }

      if (string === 'c') {
        this.setState({
          ...this.state,
          calculation: '0',
          calculated: false,
          lastOperation: '',
        });
      } else {
        if (this.operators[this.state.calculation[this.state.calculation.length - 1]]) {
          string = this.state.calculation.replace(/.$/, string);
          this.setState({
            ...this.state,
            calculation: string,
            calculated: false,
            lastOperation: '',
          });
          return;
        }

        if (string === '-') {
          this.setState({
            ...this.state,
            calculation: this.state.calculation + string,
          });
        } else { 
          this.setState({
            ...this.state,
            calculation: this.state.calculation === '0' ? '0' : this.state.calculation + string,
            calculated: false,
            lastOperation: '',
          });
        }
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
    console.log(this.state);
    return ( 
      <div className='Calculator'>
        <CalculatorDisplay calculation={this.state.calculation} />
        <Buttons updateCalculation={this.updateCalculation} />
      </div>
     );
  }
}
 
export default Calculator;
