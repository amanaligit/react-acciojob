import React, { Component } from "react";

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    if (!this.state.title || !this.state.description)
      alert("Title or description cannot be blank");
    else {
      this.props.addTodo(this.state.title, this.state.description);
      this.setState({ title: "", description: "" });
    }
  }

  render() {
    // console.log(this.props.addTodo);
    return (
      <div className="conatiner my-3 p-4">
        <h3>Add a Todo</h3>
        <form onSubmit={this.submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              value={this.state.title}
              onChange={(e) =>
                this.setState({ ...this.state, title: e.target.value })
              }
              type="text"
              className="form-control"
              id="title"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Todo description
            </label>
            <input
              value={this.state.description}
              onChange={(e) =>
                this.setState({ ...this.state, description: e.target.value })
              }
              type="text"
              className="form-control"
              id="description"
            ></input>
            <button className="btn btn-lg btn-success my-4 mx-auto d-block">
              Submit Todo
            </button>
          </div>
        </form>
      </div>
    );
  }
}
