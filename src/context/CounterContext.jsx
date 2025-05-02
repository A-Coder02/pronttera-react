import { createContext, useContext, useState } from "react";

export const CounterContext = createContext({
  count: 0,
});

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
