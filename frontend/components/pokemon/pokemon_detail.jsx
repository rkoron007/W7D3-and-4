import React from 'react';


class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestThatPokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.pokemon.id !== nextProps.pokemon.id) {
      console.log(nextProps);
      this.props.requestThatPokemon(nextProps.match.params.id);
    }
  }

  render(){
    return(
    <div>
      <h1>{this.props.pokemon.name}</h1>
      <ul>
        {this.props.items.map(el=> <li>{el.name}</li>)}
      </ul>
    </div>
    );
  }
}

export default PokemonDetail;
