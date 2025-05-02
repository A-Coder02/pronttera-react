import React from "react";
import cssClasses from "./Button.module.css";
const Button = ({ children = null, onClick = () => {} }) => {
  return (
    <button onClick={onClick} className={cssClasses.wrapper}>
      {children}
    </button>
  );
};

export default Button;
