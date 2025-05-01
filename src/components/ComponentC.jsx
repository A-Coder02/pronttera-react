import React, { useContext } from "react";
import { messageContext } from "../context/MessageContext";

const ComponentC = () => {
  const { message } = useContext(messageContext);
  return (
    <div>
      <h3>ComponentC: {message}</h3>
    </div>
  );
};

export default ComponentC;
