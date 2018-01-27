import { combineReducers } from "redux";
import {reducer as formReducer } from 'redux-form';
import {staticReducer} from './static-reducer';
import {playerReducer} from './player-reducer';
import {matchReducer} from './match-reducer';
import {leagueReducer} from './league-reducer';
const rootReducer = combineReducers({ 
  static: staticReducer,
  form: formReducer,
  player: playerReducer,
  match: matchReducer,
  league: leagueReducer
});
export default rootReducer;