import React, { useState } from "react";

function HookObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  // No automatic merging so always spread previous state in useState if using objects
  return (
    <div>
      <input
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        value={name.firstName}
        placeholder="enter firstname"
      />
      <input
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        value={name.lastName}
        placeholder="enter lastName"
      />
      <h1>Firstname: {name.firstName}</h1>
      <h1>Lastname: {name.lastName}</h1>
    </div>
  );
}

export default HookObject;
