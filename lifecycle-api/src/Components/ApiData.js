import React, { Component } from "react";
import NavLinks from "./NavLinks";

export default class ApiData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {},
      pageNo: 1,
    };
    this.setPageNo = this.setPageNo.bind(this);
  }

  fetchData() {
    this.setState({ ...this.state, loading: true });
    setTimeout(() => {
      fetch(`https://reqres.in/api/users/${this.state.pageNo}`)
        .then((res) => res.json())
        .then((json) => {
          // console.log(json.data);
          this.setState({ ...this.state, loading: false, data: json.data });
        });
    }, 500);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNo && prevState.pageNo !== this.state.pageNo) {
      // console.log("component did update ran");
      this.fetchData();
    }
  }

  setPageNo(pageNo) {
    this.setState({ ...this.state, pageNo: pageNo });
  }

  render() {
    const propsForChild = {
      setPageNo: this.setPageNo,
      pageNo: this.state.pageNo,
    };
    // console.log("re-rendering");
    console.log(this.props.match.params.pageNo);

    return (
      <div>
        <article
          className="d-flex justify-content-center align-content-center"
          style={{ margin: "50px", minHeight: "70vh" }}
        >
          {this.state.loading ? (
            <img src="/loading.svg" alt="loading..." />
          ) : (
            <div className="w-100">
              <img
                src={this.state.data.avatar}
                alt="user"
                className="w-50 border p-1 mx-auto d-block"
              />
              <h1 className="display-4 text-center mt-3">
                Hi! My name is{" "}
                <strong>
                  {this.state.data.first_name + " " + this.state.data.last_name}
                </strong>
              </h1>
              <h1 className="display-6 text-center mt-3">
                My E-mail is <strong>{this.state.data.email}</strong>
              </h1>
            </div>
          )}
        </article>
        {/* <NavLinks {...propsForChild} /> */}
        <NavLinks setPageNo={this.setPageNo} pageNo={this.state.pageNo} />
      </div>
    );
  }
}
