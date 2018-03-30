import React from "react";
import { connect } from "react-redux";
import { selectAllPokemon, selectAllItems } from '../../reducers/selectors';
import { requestThatPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from "./pokemon_detail";


const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[`${ownProps.match.params.id}`],
  items: selectAllItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestThatPokemon: (pokemon) => dispatch(requestThatPokemon(pokemon))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
