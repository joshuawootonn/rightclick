import { combineReducers } from "redux";
import {playerReducer} from "./player-reducer";
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ 
  player: playerReducer,
  form: formReducer
});
export default rootReducer;