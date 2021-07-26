import React, { useEffect, useRef } from "react";

function RefFocusInput() {
  // cause a
  // use ref is very similar to useState
  // useRef does not cause re-renders, only differnece

  const inputRef = useRef(null);

  useEffect(() => {
    // Have to focus input here
    //   document.getElementById('input') == inputRef.current
    // document.getElementById("input").focus();
    inputRef.current.focus();
    //   Only cause side effects using useRef, do not misuse it
    //   misuse: Don't manipulate the DOM using
    //   .appendChild, removeChild(), remove(), insertBefore() dont use these
  }, []);

  return (
    <div>
      <input type="text" id="input" ref={inputRef} />
    </div>
  );
}

export default RefFocusInput;
