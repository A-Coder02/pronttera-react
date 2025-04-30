import React, { useContext } from "react";
import CompB from "./CompB";
import { greetContext } from "../context/GreetContext";

const CompA = () => {
  const context = useContext(greetContext);
  const { greet, setGreet } = context;

  function onChangeHandler(e) {
    const value = e.target.value;
    setGreet(value);
  }

  return (
    <div>
      <h1>CompA</h1>
      <input type="text" value={greet} onChange={onChangeHandler} />
      <CompB />
    </div>
  );
};

export default CompA;
