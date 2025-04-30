import React from "react";
import Component from "./Component";
import Button from "./Button";
import ComponentA from "./components/ComponentA";
import { MessageContextProvider } from "./context/MessageContextOld";
import CompA from "./components/CompA";
import { greetContext, GreetContextProvider } from "./context/GreetContext";

console.log({ greetContext });

const App = () => {
  const message = "Hello React Devs!";
  return (
    <GreetContextProvider>
      <div
        style={{
          padding: "3rem",
        }}
      >
        <p>React + Vite Application</p>
        <CompA />
      </div>
    </GreetContextProvider>
  );
};

export default App;

// ComponentA message
// ComponentB via props
// ComponentC via props
