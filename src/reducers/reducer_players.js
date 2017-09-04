import {FETCH_PLAYER} from '../actions';

export default function(state = 'false', action){
  switch(action.type){
    case FETCH_PLAYER:
      return Object.assign({}, state, {
        player: action.payload.data
      })
    default:
      return state
  }
}
