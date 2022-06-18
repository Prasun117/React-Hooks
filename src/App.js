import "./styles.css";
import { useState } from "react";
import { ParentComponent } from "./ParentComponent";
import { ComponentUseCallbackParent } from "./ComponentUseCallback";
export default function App() {
  const [data, setData] = useState();

  const handleChange = () => {
    setData(Math.random() * 100);
  };
  console.log("root");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Root Element</h2>
      {/* <button onClick={handleChange}>Click me</button>
      <ParentComponent /> */}
      <ComponentUseCallbackParent />
    </div>
  );
}
