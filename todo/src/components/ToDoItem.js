import React from "react";

function ToDoItem({ title, desc }) {
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <p>{desc}</p>
      <button className="btn btn-sm btn-danger d-block mx-auto">Delete</button>
      <hr />
    </>
  );
}

export default ToDoItem;
