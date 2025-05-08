import { errorHandler } from "../utils/errorHander";
import { pokemonUrl } from "../utils/urls";

const getList = async () => {
  let results = [];
  //   await fetch(`${pokemonUrl}?limit=100000`)
  //     .then(async (response) => {
  //       const data = await response.json();
  //       const { results: _results } = data;
  //       results = _results;
  //     })
  //     .catch((error) => errorHandler(error))
  //     .finally(() => console.log("Service Used"));
  await fetch(`${pokemonUrl}?limit=100000`)
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .then((data) => {
      return data.results;
    })
    .then((dataResults) => {
      results = dataResults;
    })
    .catch((error) => errorHandler(error))
    .finally(() => console.log("Service Used"));

  return results;
};

const getSingle = async (pokemonName) => {
  try {
    const response = await fetch(`${pokemonUrl}/${pokemonName}`);
    const data = await response.json();
    const pokemonData = {
      name: data.name,
      img_url: data.sprites.front_default,
    };
    return pokemonData;
  } catch (error) {
    errorHandler(error);
  } finally {
    console.log("Service used");
  }
};

const PokemonService = { getList, getSingle };

export default PokemonService;
