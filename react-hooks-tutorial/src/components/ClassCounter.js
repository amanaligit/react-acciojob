import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter1: 0, counter2: 0 };
    this.incrementCount1 = this.incrementCount1.bind(this);
    this.incrementCount2 = this.incrementCount2.bind(this);
  }

  // automatic merging of states in classes;

  incrementCount1() {
    this.setState({ counter1: this.state.counter1 + 1 });
  }

  incrementCount2() {
    this.setState({
      counter2: this.state.counter2 + 1,
    });
  }

  render() {
    return (
      <div>
        {" "}
        <h1>Count1: {this.state.counter1} </h1>{" "}
        <h1>Count2: {this.state.counter2} </h1>
        <button onClick={this.incrementCount1}>increment Count1</button>
        <button onClick={this.incrementCount2}>increment Count2</button>
      </div>
    );
  }
}
