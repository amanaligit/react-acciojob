import React from "react";

function Title() {
  console.log("Title re-rendered");
  return (
    <div>
      <h1>UseCallback Example</h1>
    </div>
  );
}

export default React.memo(Title);
