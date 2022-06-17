import { useCallback, useState, useMemo } from "react";

export const ChildComponent = () => {
  const [data, setData] = useState("child Component");
  const simpleCallback = useCallback(() => console.log("hi", data), [data]);
  const simpleMemo = useMemo(() => console.log("useMemo", data), [data]);
  simpleCallback();

  return <div>{simpleMemo}Child Component</div>;
};
