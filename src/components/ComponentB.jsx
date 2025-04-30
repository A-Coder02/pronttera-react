import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ message }) => {
  return (
    <div>
      <h3>ComponentB ({message})</h3>
      <ComponentC  />
    </div>
  );
};

export default ComponentB;
