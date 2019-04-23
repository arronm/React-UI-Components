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
    // this.calculation = this.props.calculation;
    return (
      <div className='CalculatorDisplay'>
        {this.calculation}
      </div>
    );
  }
}
 
export default CalculatorDisplay;
