import "./styles.css";
import { useState } from "react";

import { ComponentUseCallbackParent } from "./ComponentUseCallback";
import { ParentWithoutUseCallback } from "./Example-Without-useCallback/ParentWithoutUseCallback";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ParentComponent } from "./Example-For-Memo/ParentMemo";

export default function App() {
  const [data, setData] = useState();

  const handleChange = () => {
    setData(Math.random() * 100);
  };
  console.log("root");
  const nav = [
    { path: "/ParentWithoutUseCallback", name: "Example without useCallback" },
    { path: "/Example-Memo", name: "Example with memo" },
    { path: "/Example-useCallback", name: "Example with useCallback" }
  ];
  const NavElements = nav.map((items, index) => (
    <button key={index}>
      <Link key={index} to={items.path}>
        {items.name}
      </Link>
    </button>
  ));
  return (
    <Router>
      <div className="App">
        {NavElements}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Hello CodeSandbox</h1>
                <h2>Root Element</h2>
              </>
            }
          />
          <Route
            path="/ParentWithoutUseCallback"
            element={<ParentWithoutUseCallback />}
          />
          <Route path="/Example-Memo" element={<ParentComponent />} />
          <Route
            path="/Example-useCallback"
            element={<ComponentUseCallbackParent />}
          />
        </Routes>
      </div>
    </Router>
  );
}
