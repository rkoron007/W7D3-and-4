import { RECEIVE_THAT_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (state = {},action) =>{
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_THAT_POKEMON:
      let updateState = Object.assign({}, state);
      updateState = action.payload.items;
      return updateState;
    default:
      return state;
  }
};


export default itemReducer;
