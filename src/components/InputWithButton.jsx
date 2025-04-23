import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

const InputWithButton = (props) => {
  // value, onChange, onClick
  const [inputValue, setInputValue] = useState("Hello");
  function inputHandler(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  function onClickButton() {
    alert(inputValue);
  }
  // Events
  return (
    <div className="input-wrapper border border-gray-500 rounded-xl flex overflow-hidden">
      <input
        value={inputValue}
        onChange={inputHandler}
        type="text"
        className="flex-1 p-2"
      />
      <button
        onClick={onClickButton}
        className="p-2 bg-green-500 cursor-pointer aspect-square w-8 flex-[0_0_48px] grid place-content-center "
      >
        <BiPlus className="text-white aspect-square text-2xl" />
      </button>
    </div>
  );
};

export default InputWithButton;
