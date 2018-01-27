import * as actions from "../actions/types";
import * as status from './status';
const initialState = {
  status: status.INIT
};
export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actions.GET_PLAYER_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.GET_PLAYER_SUCCESS:
      return {
        ...state, 
        ...action.payload.data,
        status: status.SUCCESS
      };
    case actions.GET_PLAYER_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        error: "Failed retreiving player data"
      };
    default:
      return state;
  }
};
