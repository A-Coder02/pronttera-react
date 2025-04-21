import React from "react";
import Component from "./Component";
import Button from "./Button";
import Counter from "./Counter";
const App = () => {
  function primaryBtnOnClick() {
    alert("Hello");
  }

  function secondaryBtnOnClick() {
    alert("Hello, I'm Secondary Button");
  }

  return (
    <div>
      <p>React + Vite Application</p>
      <Counter />
    </div>
  );
};

export default App;

// Button({
//   variant : 'primary',
//   onClick : primaryBtnOnClick
// })
