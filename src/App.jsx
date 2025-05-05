import React, { useState } from "react";

// Pokemon
// State, list, Card
// UI: Searchbar, Card list, SingleCard UI - done
// fetch pokemon list
const App = () => {
  // States
  const [pokemonList, setPokemonList] = useState([
    { id: 1, name: "ABC" },
    { id: 2, name: "ABCD" },
    { id: 3, name: "HHI" },
    { id: 4, name: "HHH" },
    { id: 5, name: "HIHI" },
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [search, setSearch] = useState("");

  let filteredPokemonList = pokemonList;

  if (search.length > 0) {
    filteredPokemonList = pokemonList.filter((p) => {
      const str = p.name.toLowerCase();
      const searchValue = search.toLowerCase();

      return str.includes(searchValue);
    });
  }

  // Handlers & Functions
  const selectPokemonHandler = (data) => {
    setSelectedPokemon(data);
  };

  const removeSelectedPokemonHandler = () => {
    setSelectedPokemon(null);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-200 ">
        <div className="py-4 bg-amber-300">
          <h1 className="text-4xl text-center text-amber-950">Pokemon List</h1>
        </div>
        <div className="w-full p-4 flex gap-4">
          <input
            className="px-4 py-2 flex-1 bg-white"
            placeholder="Search Pokemon..."
            value={search}
            onChange={searchHandler}
          />
          <button className="px-4 py-2 text-black font-medium bg-amber-300">
            Search
          </button>
        </div>
      </div>
      <div className="flex-1 flex gap-4 bg-slate-200 p-4">
        <div className="grid grid-cols-4 gap-4 flex-1 overflow-auto">
          {/* Card */}
          {filteredPokemonList.length > 0 ? (
            filteredPokemonList.map((pokemon) => {
              return (
                <div
                  onClick={() => selectPokemonHandler(pokemon)}
                  key={pokemon.id}
                  className="h-32 shadow-2xs text-xl font-bold p-6 bg-white cursor-pointer hover:bg-amber-500 hover:text-white"
                >
                  <h2>{pokemon.name}</h2>
                </div>
              );
            })
          ) : (
            <p>No Pokemon Found</p>
          )}
        </div>

        {selectedPokemon ? (
          <div className="bg-white min-w-96 p-4">
            <img src="" className="aspect-square w-full" alt="" />
            <p className="text-lg font-medium">{selectedPokemon.name}</p>
            <p>{selectedPokemon.id}</p>
            <button
              onClick={removeSelectedPokemonHandler}
              className="bg-red-500 text-white px-2 mt-2 cursor-pointer"
            >
              Deselect
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
