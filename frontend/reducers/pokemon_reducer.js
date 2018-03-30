import { RECEIVE_ALL_POKEMON, RECEIVE_THAT_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = action.pokemon;
      return newState;
    case RECEIVE_THAT_POKEMON:
      let updateState = Object.assign({}, state);
      updateState[action.payload.pokemon.id] = action.payload.pokemon;
      return updateState;
    default:
      return state;
  }
};

export default pokemonReducer;

// {
//   poke 1 : {}
//   poke 2 : {}
//   single pokemon : {poke + items}
// }
