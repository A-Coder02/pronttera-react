import { createContext, useState } from "react";

export const greetContext = createContext({
  greet: "",
});

const ContextProvider = greetContext.Provider;

export const GreetContextProvider = ({ children }) => {
  const [greet, setGreet] = useState("Hello React Devs!");
  return (
    <ContextProvider
      value={{
        greet,
        name: "Arbaj",
        setGreet,
      }}
    >
      <div
        style={{
          background: "royalblue",
          color: "white",
        }}
      >
        {children}
      </div>
    </ContextProvider>
  );
};
