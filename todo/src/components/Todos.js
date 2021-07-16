import React from "react";
import ToDoItem from "./ToDoItem";

function Todos(props) {
  console.log(props.todos);
  // somehow dynamically render ToDItem for each element in props.todo
  const ToDoList = props.todos.map((todo) => (
    <ToDoItem title={todo.title} desc={todo.desc} />
  ));
  //   console.log(ToDoList);
  return (
    <div
      className="container"
      style={{ minHeight: "87vh", margin: "40px auto" }}
    >
      <h3 className="my-3">Todos List</h3>
      {ToDoList}
    </div>
  );
}

export default Todos;
