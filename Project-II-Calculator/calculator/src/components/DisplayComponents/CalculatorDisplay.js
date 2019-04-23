import React, { Component } from 'react';
import './Display.scss';

class CalculatorDisplay extends Component {
  constructor(props) {
    super(props);
    this.calculation = this.props.calculation;
  }

  componentWillReceiveProps(nextProps) {
    this.calculation = nextProps.calculation;
  }

  render() {
    console.log('y u no render:', this);
    return (
      <div className='CalculatorDisplay'>
        {this.calculation}
      </div>
    );
  }
}
 
export default CalculatorDisplay;
