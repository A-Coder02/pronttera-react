import React, { useState } from "react";
import Headline from "./components/Headline";
import InputWithButton from "./components/InputWithButton";
import ClearAllButton from "./components/ClearAllButton";
import GroceryList from "./components/GroceryList/GroceryList";
import { v4 as uuidv4 } from "uuid";
// Apni Groccery
// 1) UI
// 2) Split into Components
// Headline, Input, ClearAllButton, Product List, Product Items
const App = () => {
  const [list, setList] = useState([]);
  // []{} id, name

  // InputWithButton
  const [inputValue, setInputValue] = useState("");
  function inputHandler(e) {
    setInputValue(e.target.value);
  }
  function onSubmitInputValue() {
    console.log("Added : ", inputValue);
    console.log("ID: ", uuidv4());
    const newProduct = {
      id: uuidv4(),
      name: inputValue,
    };
    //
    const newList = [...list, newProduct];
    console.log({ newList, list, newProduct });
    setList(newList);
    setInputValue("");
    //
  }

  function onClickClearAll() {
    setList([]);
  }

  function onDelete(productId) {
    console.log("Clicked on Delete Icon");
    console.log({ productId, list });
    const filteredList = list.filter(function (product) {
      if (product.id === productId) {
        return false;
      } else {
        return true;
      }
    });
    console.log({ filteredList });
    setList(filteredList);
  }
  // State Lifting
  return (
    <div className="mx-auto py-8 px-4 max-w-96 bg-white h-screen ">
      <Headline>Apni Grocery</Headline>
      <div className="flex flex-col gap-6">
        {/* Input */}
        <InputWithButton
          inputValue={inputValue}
          inputHandler={inputHandler}
          onSubmit={onSubmitInputValue}
          placeholder="Enter Your Product..."
        />
        {/* Clear All */}
        {list.length !== 0 ? (
          <ClearAllButton onClick={onClickClearAll} />
        ) : null}
        {/* GroceryList */}
        {list.length > 0 ? (
          <GroceryList list={list} onDelete={onDelete} />
        ) : (
          <p className="text-gray-500 text-center">Please Add Product 🥕</p>
        )}
      </div>
    </div>
  );
};

export default App;
