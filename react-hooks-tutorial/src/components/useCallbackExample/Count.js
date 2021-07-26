import React from "react";

function Count({ text, count }) {
  console.log("counter of " + text + " re-rendered");
  return (
    <div>
      <h2>
        {text} : {count}
      </h2>
    </div>
  );
}

export default React.memo(Count);
