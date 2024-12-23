import { useState } from "react";
const UseState = () => {
  //   const sum = () => {
  //     console.log("Sum");
  //     return 0;
  //   };
  const [text, setText] = useState(() => {
    console.log("This is another function");
    return 0;
  });

  return (
    <>
      <button onClick={() => setText(text + 1)}>Increment</button>
      <button onClick={() => setText(text - 1)}>Decrement</button>
      <h1>{text}</h1>
    </>
  );
};
export default UseState;
