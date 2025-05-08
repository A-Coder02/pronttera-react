import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import PokemonList from "./components/PokemonList";
import PokemonViewer from "./components/PokemonViewer";
import PokemonService from "./services/pokemon.service";

// Pokemon
// State, list, Card
// UI: Searchbar, Card list, SingleCard UI - done
// fetch pokemon list
const App = () => {
  // States
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);

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
    fetchPokemonData(data.name);
  };

  const removeSelectedPokemonHandler = () => {
    setSelectedPokemon(null);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  async function fetchPokemonList() {
    setIsLoading(true);
    const results = await PokemonService.getList();
    setPokemonList(results);
    setIsLoading(false);
  }

  async function fetchPokemonData(pokemonName) {
    setIsLoadingPokemon(true);
    const pokemonData = await PokemonService.getSingle(pokemonName);
    setSelectedPokemon(pokemonData);
    setIsLoadingPokemon(false);
  }

  console.log({ pokemonList });

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-200 ">
        <div className="py-4 bg-amber-300">
          <h1 className="text-4xl text-center text-amber-950">Pokemon List</h1>
        </div>
        <SearchInput value={search} onChange={searchHandler} />
      </div>
      <div className="flex-1 flex gap-4 bg-slate-200 p-4 overflow-auto ">
        {isLoading ? (
          <p>Pokemon loading....</p>
        ) : (
          <>
            <PokemonList
              isLoading={isLoading}
              list={filteredPokemonList}
              onClickCard={selectPokemonHandler}
            />
            <PokemonViewer
              isLoading={isLoadingPokemon}
              pokemon={selectedPokemon}
              onRemove={removeSelectedPokemonHandler}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
