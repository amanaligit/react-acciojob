import React, { useState, useEffect } from "react";

function EffectCounter() {
  // useState returns a value of the state and a function to update the said value
  // this.state, this.setstate;

  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(1);
  let [name, setName] = useState("");
  //   console.log(returnedValue);

  // This will run on every re-render and first render
  useEffect(() => {
    // if (prevState.counter != this.state.counter) {
    console.log("running useEffect");
    // document.title = `You clicked ${counter} times and ${counter2} times`;
    // }
  }, [counter, counter2]);

  //   componentDidMount only use:
  useEffect(() => {
    alert("Hello User!");
    // document.title = `You clicked ${counter} times and ${counter2} times`;
  }, []);

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
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </>
  );
}

export default EffectCounter;
