import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import PokemonList from "./components/PokemonList";
import PokemonViewer from "./components/PokemonViewer";

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
        <SearchInput value={search} onChange={searchHandler} />
      </div>
      <div className="flex-1 flex gap-4 bg-slate-200 p-4">
        <PokemonList
          list={filteredPokemonList}
          onClickCard={selectPokemonHandler}
        />
        <PokemonViewer
          pokemon={selectedPokemon}
          onRemove={removeSelectedPokemonHandler}
        />
      </div>
    </div>
  );
};

export default App;
