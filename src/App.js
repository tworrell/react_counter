import React, {Component} from 'react';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

    //this is where we are going to put our methods
    increment = () =>{
    if(this.state.count >=20){
      this.setState({
        count:20
      });
    }else {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

    decrement = () =>{
    if(this.state.count< 1){
      this.setState({
        count:0
      });
    }else {
      this.setState({
        count: this.state.count- 1
      });
    }
  };

    reset = () => {
      this.setState({
        count: 0
    });
  };

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }




  render(){
  return(
    <div className ="container">
      <div className = "navbar">Counter.js</div>
      <div className = "counter">
      <h1>{this.state.count}</h1>
      <button type = "button" onClick={this.increment}>Increment</button>
      <button type = "button" onClick={this.decrement}>Decrement</button>
      <button type = "button" onClick ={this.reset}>Clear</button>
      <button type = "button" onClick={this.ToggleClick}>
          { this.state.show ? 'Double Increments' : 'Single Increments' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
    </div>
  </div>
  );
}
}

export default Counter;
