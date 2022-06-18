import { useState } from "react";

export function ChildComponentUseCallback({ items, handleCallback }) {
  const [count, setCount] = useState(0);
  const element = items.map((item, index) => (
    <button key={index} onClick={handleCallback}>
      {item}
    </button>
  ));
  const handleChildClick = () => {
    setCount((count) => count + 1);
  };
  console.log("child component");
  return (
    <div>
      {element}
      <div>child count:{count}</div>
      <div>
        <button onClick={handleChildClick}>child click</button>
      </div>
    </div>
  );
}
