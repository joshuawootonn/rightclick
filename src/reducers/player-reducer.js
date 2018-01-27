import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PLAYER_FETCHING_ON:
      return{
        ...state,
        loading: true
      }
    case actions.PLAYER_FETCHING_OFF:
      return{
        ...state,
        loading: false
      }
    case actions.GET_PLAYER_REQUEST:
      return {
        loading: true
      };
    case actions.GET_PLAYER_SUCCESS:
      return {
        ...state, 
        ...action.payload.data,        
        error: null
      };
    case actions.GET_PLAYER_FAILURE:
      return {
        ...state,
        error: "Failed retreiving player data"
      };
    default:
      return state;
  }
};
