import React, { useState } from "react";
import Button from "./Button.jsx";

const Counter = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);

  function incrementFunction() {
    let newCount = count + 1;
    setCount(newCount);
  }

  function decrementFunction() {
    let newCount = count - 1;
    setCount(newCount);
  }

  function countHandlerTo5() {
    setCount(5);
  }

  //   const stateManagment = useState("Hello World");
  //   const state = stateManagment[0];
  //   const setState = stateManagment[1];

  //   const [state, setState] = useState("Hello");

  //   function stateHandler() {
  //     setState("Hello Atif Pathan!!");
  //   }

  //   console.log({ state, setState });

  //   return (
  //     <div>
  //       {state}
  //       <Button onClick={stateHandler}>Click me</Button>
  //     </div>
  //   );
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {count}
      </h1>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Button onClick={incrementFunction}>Increment</Button>
        <Button onClick={countHandlerTo5}>to 5</Button>
        <Button onClick={decrementFunction} variant="secondary">
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;

// First modify our variable
// Implment that data in our html via DOM API

// State Managment
// First modify our variable
// Implment that data in our html automatically!
