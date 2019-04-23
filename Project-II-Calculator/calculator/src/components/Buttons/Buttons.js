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
        <ActionButton {...this.state} operator='c' buttonStyle="long-button"/>
        <ActionButton {...this.state} operator='/' />
        <NumberButton {...this.state} number='7' />
        <NumberButton {...this.state} number='8' />
        <NumberButton {...this.state} number='9' />
        <ActionButton {...this.state} operator='*' />
        <NumberButton {...this.state} number='4' />
        <NumberButton {...this.state} number='5' />
        <NumberButton {...this.state} number='6' />
        <ActionButton {...this.state} operator='-' />
        <NumberButton {...this.state} number='1' />
        <NumberButton {...this.state} number='2' />
        <NumberButton {...this.state} number='3' />
        <ActionButton {...this.state} operator='+' />
        <NumberButton {...this.state} number='0' buttonStyle="long-button" />
        <ActionButton {...this.state} operator='=' />
      </div>
     );
  }
}
 
export default Buttons;