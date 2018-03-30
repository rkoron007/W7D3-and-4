import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_THAT_POKEMON = "RECEIVE_THAT_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveThatPokemon = (payload) => ({
  type: RECEIVE_THAT_POKEMON,
  payload
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


export const requestThatPokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchThatPokemon(pokemonId)
    .then( (pokemonAndItems) => dispatch(receiveThatPokemon(pokemonAndItems)))
);
