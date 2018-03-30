import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { requestThatPokemon } from './actions/pokemon_actions';


document.addEventListener("DOMContentLoaded", ()=>{
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);
});



// import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import { selectAllPokemon } from './reducers/selectors';
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.selectAllPokemon = selectAllPokemon;
