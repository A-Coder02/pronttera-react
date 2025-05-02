import React from "react";
import { CounterContextProvider } from "./context/CounterContext";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </div>
  );
};

export default App;
