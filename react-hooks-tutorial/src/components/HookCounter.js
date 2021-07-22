import React, { useState } from "react";

function HookCounter() {
  // useState returns a value of the state and a function to update the said value
  // this.state, this.setstate;

  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(1);
  //   console.log(returnedValue);

  return (
    <>
      <div>
        <h1> Count: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment Count</button>
      </div>
      <div>
        <h1> Count: {counter2}</h1>
        <button onClick={() => setCounter2(counter2 + 1)}>
          Increment Count
        </button>
      </div>
    </>
  );
}

export default HookCounter;
