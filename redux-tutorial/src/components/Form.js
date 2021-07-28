import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setUsername } from "../actions";

function Form() {
  // in react, whatever function starts with use is a hook
  // A hook has to start with "use"
  // This information is useful when creating your own hooks

  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        placeholder="enter username"
        onChange={(e) => dispatch(setUsername(e.target.value))}
        value={username}
      />
      <input
        placeholder="enter password"
        type="password"
        onChange={(e) => dispatch(setPassword(e.target.value))}
        value={password}
      />
    </div>
  );
}

export default Form;
