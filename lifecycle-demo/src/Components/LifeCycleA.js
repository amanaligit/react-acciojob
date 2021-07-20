import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aman",
      showChild: true,
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // this keyword no access
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        Hello, My name is {this.state.name}
        <h1>LifeCycleA</h1>
        {this.state.showChild ? (
          <LifeCycleB />
        ) : (
          <div> ShowClild is not Enabled </div>
        )}
        <button
          onClick={() => this.setState({ ...this.state, name: "John Doe" })}
        >
          Change State
        </button>
        <button
          onClick={() =>
            this.setState({ ...this.state, showChild: !this.state.showChild })
          }
        >
          Toggle Child
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log(
      "LifecycleA componentDidMount",
      "=============================="
    );
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //   this method should not exist without componentDidUpdate
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "LifecycleA componentDidUpdate",
      "=============================="
    );
  }
}
