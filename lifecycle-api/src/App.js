import React, { Component } from "react";
import ApiData from "./Components/ApiData";
import NavBar from "./Components/NavBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {},
      pageNo: 1,
    };
  }

  fetchData() {
    this.setState({ ...this.state, loading: true });
    setTimeout(() => {
      fetch(`https://reqres.in/api/users/${this.state.pageNo}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data);
          this.setState({ ...this.state, loading: false, data: json.data });
        });
    }, 2000);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <main>
        <h1 className="display-1 text-center">LifeCycle API Example</h1>
        <ApiData loading={this.state.loading} />
        <NavBar />
      </main>
    );
  }
}
