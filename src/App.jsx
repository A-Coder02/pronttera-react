import React, { useState } from "react";
import Headline from "./components/Headline";
import InputWithButton from "./components/InputWithButton";
import ClearAllButton from "./components/ClearAllButton";
import GroceryList from "./components/GroceryList/GroceryList";
// Apni Groccery
// 1) UI
// 2) Split into Components
// Headline, Input, ClearAllButton, Product List, Product Items
const App = () => {
  const [list, setList] = useState([
    { id: 1, name: "Milk 1ltr" },
    { id: 2, name: "Snacks Bhujiya" },
  ]);
  return (
    <div className="mx-auto py-8 px-4 max-w-96 bg-white h-screen ">
      <Headline>Apni Grocery</Headline>
      <div className="flex flex-col gap-6">
        {/* Input */}
        <InputWithButton />
        {/* Clear All */}
        <ClearAllButton />
        {/* GroceryList */}
        <GroceryList list={list} />
      </div>
    </div>
  );
};

export default App;
