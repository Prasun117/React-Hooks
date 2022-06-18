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
    { path: "/Example-useCallback", name: "Example with useCallback" },
    { path: "/", name: "Home" }
  ];
  const NavElements = nav.map((items, index) => (
    <Link key={index} to={items.path}>
      <button key={index}>{items.name}</button>
    </Link>
  ));
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex", flexWrap: "wrap" }}>{NavElements}</div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome to React tutorials</h1>
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
