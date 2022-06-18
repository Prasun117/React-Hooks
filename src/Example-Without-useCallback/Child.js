import { useEffect } from "react";

export const Child = ({ items, handleChange, count }) => {
  const elements = items.map((item, index) => (
    <button onClick={handleChange} key={index}>
      {item}
    </button>
  ));
  useEffect(() => {
    console.log("Child component mounted");
    return () => {
      console.log("Child Component unmounted");
    };
  }, []);
  console.log("Child rendered");
  return (
    <div>
      <div>Parent count:{count}</div>
      <div>{elements}</div>
    </div>
  );
};
