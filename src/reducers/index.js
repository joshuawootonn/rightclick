import {combineReducers} from 'redux';
import PlayerReducer from './reducer_players';


const rootReducer = combineReducers({
  player: PlayerReducer
})
export default rootReducer