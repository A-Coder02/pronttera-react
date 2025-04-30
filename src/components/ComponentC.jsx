import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContextOld";

const ComponentC = ({}) => {
  const context = useContext(MessageContext);

  console.log({ context });
  const message = context.message;

  return (
    <div>
      <h5>ComponentC {message}</h5>
    </div>
  );
};

export default ComponentC;
