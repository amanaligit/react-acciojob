import React, { useState } from "react";

function HookArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100),
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul id="numbers">
        {items.map((item) => (
          <li key={item.id}> {item.value} </li>
        ))}
      </ul>
    </div>
  );
}

export default HookArray;
