import { useState, useMemo, useEffect } from "react";
import { getApiData } from "./Services";
export const Child = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("component mounted");
    getApiData((res) => {
      setData(res);
    });
  }, []);
  const formattedElments = (data) => {
    console.log("functions called");
    let arr = data.map((item, index) => <li key={index}>{item.title}</li>);
    return arr;
  };

  const Elements = useMemo(() => formattedElments(data), [data]);

  console.log("Child Component rendering");
  return (
    <div>
      <ul>{Elements}</ul>
    </div>
  );
};
