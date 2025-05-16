import { useCallback, useEffect, useMemo, useState } from "react";
import PokemonService from "../services/pokemon.service";

const usePokeHook = () => {
  // States
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);

  const [search, setSearch] = useState("");

  const filteredPokemonList = useMemo(() => {
    let list = pokemonList;
    if (search.length > 0) {
      list = pokemonList.filter((p) => {
        const str = p.name.toLowerCase();
        const searchValue = search.toLowerCase();

        return str.includes(searchValue);
      });
    }

    return list;
  }, [search, pokemonList]);

  // Handlers & Functions
  const selectPokemonHandler = useCallback((data) => {
    fetchPokemonData(data.name);
  }, []);

  const removeSelectedPokemonHandler = useCallback(() => {
    setSelectedPokemon(null);
  }, []);

  const searchHandler = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );

  const fetchPokemonList = useCallback(async () => {
    setIsLoading(true);
    const results = await PokemonService.getList();
    setPokemonList(results);
    setIsLoading(false);
  }, []);

  const fetchPokemonData = useCallback(async (pokemonName) => {
    setIsLoadingPokemon(true);
    const pokemonData = await PokemonService.getSingle(pokemonName);
    setSelectedPokemon(pokemonData);
    setIsLoadingPokemon(false);
  }, []);

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
