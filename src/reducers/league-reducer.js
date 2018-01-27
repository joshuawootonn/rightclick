import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_LEAGUE_FETCHING:
      return{
        ...state,
        loading: !state.loading
      }    
    case actions.GET_LEAGUE_REQUEST:
      return {
        ...state,
        league: null,
        error: null
      };
    case actions.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        league: action.payload.data,
        error: null
      };
    case actions.GET_LEAGUE_FAILURE:
      return {
        ...state,
        league: null,
        error: "Failed retreiving league data"
      };
    default:
      return state;
  }
};
