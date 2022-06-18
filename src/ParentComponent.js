import { useState } from "react";
import { ChildComponent } from "./ChildComponent";
export const ParentComponent = () => {
  const [data, setData] = useState();
  const handleFunction = () => {
    setData(Math.random());
  };
  console.log(data, "parent");
  return (
    <div>
      <div>Hi this is parent component.</div>
      <button onClick={handleFunction}>change state</button>
      <ChildComponent />
    </div>
  );
};
