import React, { useEffect, useRef, useState } from "react";

function RefTimer() {
  const [timer, setTimer] = useState(0);
  const [play, setPlay] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>Hook Timer - {timer}</h1>
      {play ? (
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
            setPlay(false);
          }}
        >
          Pause
        </button>
      ) : (
        <button
          onClick={() => {
            intervalRef.current = setInterval(() => {
              setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
            setPlay(true);
          }}
        >
          Play
        </button>
      )}
    </div>
  );
}

export default RefTimer;
