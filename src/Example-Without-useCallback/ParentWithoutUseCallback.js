import { useState, useEffect } from "react";
import { Child } from "./Child";
export const ParentWithoutUseCallback = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount((prev) => prev + 1);
  };
  const items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
  ];
  useEffect(() => {
    console.log("Parent Component Mounted");
    return () => setCount(0);
  }, []);
  useEffect(() => {
    console.log("Parent Component State changed");
  }, [count]);
  return (
    <div>
      <div>
        <button onClick={handleChange}>Parent Click</button>
      </div>
      <div>
        <Child count={count} handleChange={handleChange} items={items} />
      </div>
    </div>
  );
};
