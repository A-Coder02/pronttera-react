import { createContext, useState } from "react";

export const MessageContext = createContext({
  message: "",
  products: [],
  setMessage: () => {},
});

// console.log({ messageContext });
// const Provider = messageContext.Provider;
// console.log({ Provider });

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Sean!");
  const [products] = useState(["Milk", "Butter", "Bread"]);
  return (
    <MessageContext.Provider
      value={{
        message: message,
        products: products,
        setMessage,
      }}
    >
      <div
        style={{
          background: "",
        }}
      >
        {children}
      </div>
    </MessageContext.Provider>
  );
};
