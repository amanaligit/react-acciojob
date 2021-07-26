import React from "react";

function Button({ children, handleClick }) {
  console.log("button for " + children + " re-rendered");
  return <button onClick={handleClick}> {children} </button>;
}

export default React.memo(Button);
