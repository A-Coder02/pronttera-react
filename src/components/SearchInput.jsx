import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="w-full p-4 flex gap-4">
      <input
        className="px-4 py-2 flex-1 bg-white"
        placeholder="Search Pokemon..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
