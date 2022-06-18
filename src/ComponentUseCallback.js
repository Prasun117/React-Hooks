import { useState, useCallback } from "react";
import { ChildComponentUseCallback } from "./ChildUseCallback";
export function ComponentUseCallbackParent() {
  const [count, setCount] = useState(0);
  const handleCallbackIncreament = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log(count);
  }, [count]);
  console.log("Parent Component", count);
  return (
    <div>
      <div>Parent count: {count}</div>
      <div>
        <ChildComponentUseCallback
          items={[
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
          ]}
          handleCallback={handleCallbackIncreament}
        />
      </div>
    </div>
  );
}
