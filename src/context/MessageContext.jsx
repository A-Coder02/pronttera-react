import { createContext, useState } from "react";

// Create Context
export const messageContext = createContext({
  message: "",
  product: [],
});

// Provide Context
const Provider = messageContext.Provider;

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello Devs!");
  return (
    <Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </Provider>
  );
};
