import React, {Component} from 'react';
import ProTypes from 'prop-types';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.incrementAsync =  this.incrementAsync.bind(this);
    this.incrementIfOdd =  this.incrementIfOdd.bind(this);
  }

  incrementIfOdd () {
    if (this.props.value % 2 !==0){
      this.props.onIncrement()
    }
  }

  incrementAsync(){
    setTimeout(this.props.onIncrement, 1000)
  }

  render(){
    const {value, onIncrement, onDecrement} = this.props //Corresponse to three parameters in constructor
    return (
      <p>
        Clicked: {value} times
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increase if odd</button>
        <button onClick={this.incrementAsync}>Increase async</button>
      </p>
    )
  }
}
  // Constraint the data type by ProTypes
  Counter.ProTypes = {
    value: ProTypes.number.isRequired,
    onIncrement : ProTypes.func.isRequired,
    onDecrement : ProTypes.func.isRequired
  }

  export default Counter



 