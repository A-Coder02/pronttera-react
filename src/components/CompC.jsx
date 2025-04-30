import React, { useContext } from "react";
import { greetContext } from "../context/GreetContext";

const CompC = () => {
  const context = useContext(greetContext);
  console.log({ context });
  const message = context.greet;
  return (
    <h3>
      CompC ({message}){/* Show message here */}
    </h3>
  );
};

export default CompC;
