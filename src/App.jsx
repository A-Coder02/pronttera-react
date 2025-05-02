import React from "react";
import { CounterContextProvider } from "./context/CounterContext";
import Counter from "./Counter";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CounterContextProvider>
          <Counter />
        </CounterContextProvider>
      </Provider>
    </div>
  );
};

export default App;
