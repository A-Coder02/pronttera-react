import React from "react";

const PokemonList = ({ list, onClickCard }) => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-4 gap-4 overflow-auto">
        {list.length > 0 ? (
          list.map((pokemon) => {
            return (
              <div
                onClick={() => onClickCard(pokemon)}
                // onClick={() => selectPokemonHandler(pokemon)}
                key={pokemon.id}
                className="h-22 shadow-2xs text-xl font-bold p-6 bg-white cursor-pointer hover:bg-amber-500 hover:text-white"
              >
                <h2>{pokemon.name}</h2>
              </div>
            );
          })
        ) : (
          <p>No Pokemon Found</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
