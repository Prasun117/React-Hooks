import { useState } from "react";
import { Child } from "./Child";
export const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  console.log("Parent Component");
  return (
    <div>
      <div>parent count:{count}</div>
      <div>
        <button onClick={handleClick}>click</button>
        <Child />
      </div>
    </div>
  );
};
