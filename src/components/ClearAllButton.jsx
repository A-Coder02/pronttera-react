import React from "react";

const ClearAllButton = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="text-red-500 text-sm cursor-pointer block ml-auto"
      >
        Clear All
      </button>
    </div>
  );
};

export default ClearAllButton;
