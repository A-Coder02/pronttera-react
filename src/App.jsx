import React from "react";
import ComponentA from "./components/ComponentA";
import { MessageContextProvider } from "./context/MessageContext";

const App = () => {
  return (
    <MessageContextProvider>
      <div>
        <ComponentA />
      </div>
    </MessageContextProvider>
  );
};

export default App;
