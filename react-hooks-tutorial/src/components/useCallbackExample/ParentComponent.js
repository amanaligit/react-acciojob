import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [salary, setSalary] = useState(10000000);
  const [age, setAge] = useState(50);

  // Reference of these functions change on every re-render
  // even though they are doing the same thing
  // foo1 == foo2 returns false

  // WE DONT WANT TO MAKE THIS FUNCTION AGAIN
  const incrementSalary = useCallback(
    () => setSalary((sal) => sal + 10000),
    []
  );
  const incrementAge = useCallback(() => setAge((age) => age + 1), []);

  return (
    <div>
      <Title />
      <Count text="salary" count={salary} />
      {/* should not re-render */}
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <Count text="age" count={age} />
      {/* Should not re-render */}
      <Button handleClick={incrementAge}>Increment Age</Button>
    </div>
  );
}

export default ParentComponent;
