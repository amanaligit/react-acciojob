import React from "react";
import { useSelector } from "react-redux";

function Welcome() {
  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);

  return (
    <div>
      <h1>
        Hello! My name is {username} and my password {password}
      </h1>
    </div>
  );
}

export default Welcome;
