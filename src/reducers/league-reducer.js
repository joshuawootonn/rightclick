import * as actions from "../actions/types";
const initialState = {
  loading: false
};

export const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_LEAGUE_FETCHING:
      return {
        ...state,
        loading: !state.loading
      };
    case actions.GET_LEAGUE_REQUEST:
      return {
        loading:true
      };
    case actions.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        ...action.payload.data[0],
        error: null
      };
    case actions.GET_LEAGUE_FAILURE:
      return {
        ...state,
        error: "Failed retreiving league data"
      };
    default:
      return state;
  }
};
