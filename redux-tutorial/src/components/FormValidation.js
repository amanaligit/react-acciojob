import React, { useState } from "react";

function FormValidation() {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const phoneIsValid = /^\d{3}[ -]?\d{3}[ -]?\d{4}$/g.test(phone);
  const passwordIsInvalid = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|.*\s.*)$/g.test(
    password
  );

  // \w for word letters
  // \d for digits

  return (
    <div>
      p{1 == 2 && "AMan"}
      <p>{phoneIsValid ? "Your Phone is valid" : "Your Phone is invalid"}</p>
      <p>
        {!passwordIsInvalid
          ? "Your password is valid"
          : "Your password is invalid"}
      </p>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
      ></input>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}

export default FormValidation;
