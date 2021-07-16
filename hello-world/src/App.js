import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";
// props?
// Class Components: States
// Component: Class defined by react library

class App extends Component {
  // div -> div -> div
  // React fragments
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  // This is associated with Prototype so it takes space for only one function
  increment() {
    // Do not directly assign value to state
    // Always use setState method to modify state
    // state = state + 1
    // React needs to know that you changed the state so that it can
    // re-render your component  on every state change
    // const newState = { count: 0 };
    // this is undefined here!
    // newState.count = this.state.count + 1;
    // Whenever the state mutates, the entire Subtree from that Component
    // is re-rendered
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    // Whenever you create a new component, a new increment fucntion in that scope
    // will be created if you use this method:
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <>
        <h1>Hello world</h1>
        <Welcome name="Aman" city="delhi" />
        <h1>Count: {this.state.count}</h1>
        {/* onClick = {function} */}
        <button onClick={this.increment}>Increment Count </button>
      </>
    );
  }
}

export default App;
