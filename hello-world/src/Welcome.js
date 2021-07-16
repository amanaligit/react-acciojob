import React from "react";

function Welcome(props) {
  console.log("welcome re-rendered");
  // Not a good idea to hardcode name here
  return (
    <>
      Welcome {props.name} from {props.city}
    </>
  );
}

export default Welcome;
