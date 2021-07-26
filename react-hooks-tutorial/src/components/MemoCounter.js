import React, { useState, useMemo } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(1);
  const [counterTwo, setCounterTwo] = useState(1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={() => setCounterOne((c) => c + 1)}>
        Counter : {counterOne}
      </button>
      <div>isEven : {isEven ? "Even" : "Odd"}</div>
      <button onClick={() => setCounterTwo((c) => c + 1)}>
        Counter : {counterTwo}
      </button>
    </div>
  );
}

export default MemoCounter;
