import React from "react";

function ToDoItem({ title, desc, deleteTodo, index }) {
  console.log(deleteTodo);
  console.log(index);
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <p>{desc}</p>
      <button
        onClick={() => deleteTodo(index)}
        className="btn btn-sm btn-danger d-block mx-auto"
      >
        Delete
      </button>
      <hr />
    </>
  );
}

export default ToDoItem;
