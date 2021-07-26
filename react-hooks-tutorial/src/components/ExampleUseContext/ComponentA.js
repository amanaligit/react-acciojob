import React, { useState } from "react";
import ComponentB from "./ComponentB";

export const NameContext = React.createContext();
export const LocationContext = React.createContext();

function ComponentA() {
  const [name, setName] = useState("Aman");

  return (
    <NameContext.Provider value={"John Doe"}>
      <LocationContext.Provider value={"India"}>
        <div>
          Component A
          <ComponentB />
        </div>
      </LocationContext.Provider>
    </NameContext.Provider>
  );
}

export default ComponentA;
