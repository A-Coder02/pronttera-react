import { useEffect, useState } from "react";
import PokemonService from "../services/pokemon.service";

const usePokeHook = () => {
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

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return {
    // states
    search,
    isLoading,
    list: filteredPokemonList,
    selectedPokemon,
    isLoadingPokemon,
    // functions & handlers
    onSearch: searchHandler,
    onClickPokemonCard: selectPokemonHandler,
    removePokemon: removeSelectedPokemonHandler,
  };
};

export default usePokeHook;
