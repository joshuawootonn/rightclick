import { combineReducers } from "redux";
import player from "./player";
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ 
  player: player,
  form: formReducer
});
export default rootReducer;