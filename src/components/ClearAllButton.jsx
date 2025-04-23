import React from "react";

const ClearAllButton = () => {
  function onClick() {
    alert("Clear All Clicked!");
  }
  return (
    <div>
      <button
        onClick={onClick}
        className="text-red-500 text-sm cursor-pointer block ml-auto"
      >
        Clear All
      </button>
    </div>
  );
};

export default ClearAllButton;
