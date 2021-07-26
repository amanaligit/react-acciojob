import React, { useContext } from "react";
import { LocationContext, NameContext } from "./ComponentA";

function ComponentC() {
  const name = useContext(NameContext);
  const location = useContext(LocationContext);

  return (
    <div>
      Component C{/* Pass A function */}
      {/* Old code: */}
      {/* <NameContext.Consumer>
        {(username) => {
          return (
            <LocationContext.Consumer>
              {(location) => {
                return (
                  <h1>
                    Welcome {username} from {location}
                  </h1>
                );
              }}
            </LocationContext.Consumer>
          );
        }}
      </NameContext.Consumer> */}
      {/* New Code */}
      <h1>
        Welcome {name} from {location}
      </h1>
    </div>
  );
}

export default ComponentC;
