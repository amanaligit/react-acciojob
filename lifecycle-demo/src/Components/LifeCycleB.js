import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aman",
      timer: null,
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // this keyword no access
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifecycleB render");

    return (
      <div>
        <h1>LifeCycleB</h1>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      timer: setInterval(() => console.log("running timer"), 1000),
    });
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //   this method should not exist without componentDidUpdate
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleB componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    //   this.setState({...this})
    console.log("unmounting LifeCycleB");
  }
}
