import {combineReducers} from "redux";
import pokemonReducer from "./PokemonReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default RootReducer