import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_PLAYER_FETCHING:
      return{
        ...state,
        loading: !state.loading
      } 
    case actions.GET_PLAYER_REQUEST:
      return {
        ...state,
        error: null
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
