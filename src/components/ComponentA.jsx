import React, { useContext, useState } from "react";
import ComponentB from "./ComponentB";
import { messageContext } from "../context/MessageContext";

const ComponentA = () => {
  const ctx = useContext(messageContext);

  function onChangeHandler(e) {
    const value = e.target.value;
    ctx.setMessage(value);
  }

  return (
    <div>
      <h1>ComponentA : {ctx.message}</h1>
      <input type="text" value={ctx.message} onChange={onChangeHandler} />
      <ComponentB />
    </div>
  );
};

export default ComponentA;

// Cart, Authentication, Theme
