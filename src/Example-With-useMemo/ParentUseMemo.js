import { useState } from "react";
import { Child } from "./Child";
export const ParentUseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Parent Count:{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
      <Child />
    </div>
  );
};
