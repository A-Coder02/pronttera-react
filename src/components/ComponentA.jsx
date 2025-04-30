import React, { useContext, useState } from "react";
import ComponentB from "./ComponentB";
import { MessageContext } from "../context/MessageContextOld";

const ComponentA = () => {
  const context = useContext(MessageContext);

  function onChangeHandler(e) {
    const value = e.target.value;
    context.setMessage(value);
  }

  return (
    <div>
      <h2>ComponentA</h2>
      <input type="text" value={context.message} onChange={onChangeHandler} />
      <ComponentB />
    </div>
  );
};

export default ComponentA;
