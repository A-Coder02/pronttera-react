import React from "react";
import { TbTrash } from "react-icons/tb";

const GroceryListItem = (props) => {
  function onDelete() {
    console.log(props.name);
    const id = props.id;
    props.onDelete(id);
  }

  return (
    <li className="bg-green-100 mb-4 rounded-lg flex items-center overflow-hidden ">
      <span className="flex-1 p-2">{props.name}</span>
      <button
        onClick={onDelete}
        className="p-2 bg-red-500 cursor-pointer aspect-square w-8 flex-[0_0_48px] grid place-content-center "
      >
        <TbTrash className="text-white aspect-square text-2xl" />
      </button>
    </li>
  );
};

export default GroceryListItem;
