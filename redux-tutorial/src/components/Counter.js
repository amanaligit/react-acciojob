import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions";

function Counter() {
  // useSelector hook for accessing the state, this is like the first value that
  // useState hook returns
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch an action
    dispatch(increment());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
