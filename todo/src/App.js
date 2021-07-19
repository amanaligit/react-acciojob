import React, { Component } from "react";
import AddToDo from "./components/AddToDo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default class App extends Component {
  constructor(props) {
    super(props);
    let initTodo;
    if (localStorage.getItem("todos") == null) initTodo = [];
    else initTodo = JSON.parse(localStorage.getItem("todos"));
    this.state = {
      todos: initTodo,
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(title, desc) {
    let sno;
    const todos = this.state.todos;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;
    // const myTodo = {
    //   sno, title, desc
    // }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    // console.log("adding new todo", myTodo);

    todos.push(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({ todos: todos });
  }

  deleteTodo(index) {
    let newTodos = [...this.state.todos];

    newTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(newTodos);
    this.setState({ todos: newTodos });
  }

  render() {
    // const myStye = { minHeight: "100vh" };
    return (
      <>
        <Header />
        <AddToDo addTodo={this.addTodo} />
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <Footer />
      </>
    );
  }
}
