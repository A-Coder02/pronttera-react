import React from "react";
import GroceryListItem from "./GroceryListItem";

const GroceryList = (props) => {
  return (
    <ul type="none">
      {props.list.map((listItem) => {
        return <GroceryListItem name={listItem.name} />;
      })}
    </ul>
  );
};

export default GroceryList;
