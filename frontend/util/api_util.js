export const fetchAllPokemon = () => (
  $.ajax({
    method: "GET",
    url: "/api/pokemon",
  })
);


export const fetchThatPokemon = (pokemonId) => (
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`,
  })
);
