import React from "react";

const PokemonViewer = ({ pokemon, onRemove }) => {
  return pokemon ? (
    <div className="bg-white min-w-96 p-4">
      <img src="" className="aspect-square w-full" alt="" />
      <p className="text-lg font-medium">{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-2 mt-2 cursor-pointer"
      >
        Deselect
      </button>
    </div>
  ) : null;
};

export default PokemonViewer;
