import React from "react";
import cssClasses from "./Button.module.css";
const Button = ({ children = null, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black cursor-pointer text-white border border-gray-400 py-2 px-4 rounded-full hover:bg-gray-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
