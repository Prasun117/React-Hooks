import { memo } from "react";

export const Child = memo(() => {
  console.log("Child Component rendering...");
  return (
    <>
      <div>Child Component</div>
    </>
  );
});
