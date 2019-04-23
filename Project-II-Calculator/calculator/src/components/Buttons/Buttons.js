import React, { Component } from 'react';
import './Buttons.scss';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ...props,
     }
  }
  render() { 
    return ( 
      <div className='Button'>
        <ActionButton operator='c' />
        <ActionButton operator='/' />
        <NumberButton {...this.state} number='7' />
        <NumberButton {...this.state} number='8' />
        <NumberButton {...this.state} number='9' />
        <ActionButton operator='*' />
        <NumberButton {...this.state} number='4' />
        <NumberButton {...this.state} number='5' />
        <NumberButton {...this.state} number='6' />
        <ActionButton operator='-' />
        <NumberButton {...this.state} number='1' />
        <NumberButton {...this.state} number='2' />
        <NumberButton {...this.state} number='3' />
        <ActionButton operator='+' />
        <NumberButton {...this.state} number='0' />
        <ActionButton operator='=' />
      </div>
     );
  }
}
 
export default Buttons;

// 5 * 3 + 2 / 5 > '5*3+2/5'
// Find first *
// Grab number to left and right '5*3', strip from string '+2/5'
// Somehow save operator position in string?
// Execution operator '5*3' => 15
// Append result back to string '15+2/5'
// if no more *, find first /
// grab number left and right '2/5', strip from string '15+'
// Execution operator '2/5' => 0.4
// append result back to string '15+0.4'
// Regex: (/[0-9]+\*[0-9]+/g) => Returns an array of operations
// for each in the array, Split on operator (*)
// ['5', '3']
// execute operation => arr[0] op(*) arr[1]

// 1) Regex for operator => Returns array of string operations
// 2) Pass operations array to operation function => multiply(operations)
// 3) In the operation function, loop over the operations array
// 4) For each operation in operations
//    -- Split the numbers out to an array => numbers = operation.split(operator)
//    -- Execute operation => result = numbers[0] (operator) numbers[1]
//    -- Update calculation string => calculation = calculation.replace(operation, result);