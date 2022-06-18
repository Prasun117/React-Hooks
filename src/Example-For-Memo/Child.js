import { memo } from "react";

export const Child = memo(({ handleClick }) => {
  console.log("Child Component rendering...");
  return (
    <>
      <div>Child Component</div>
      <div>
        <button onClick={handleClick}>increament</button>
      </div>
    </>
  );
});
