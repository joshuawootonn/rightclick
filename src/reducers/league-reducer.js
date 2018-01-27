import * as actions from "../actions/types";
const initialState = {
  loading: false
};

export const leagueReducer = (state = initialState, action) => {
  switch (action.type) {    
    case actions.LEAGUE_FETCHING_ON:
      return{
        ...state,
        loading: true
      }
    case actions.LEAGUE_FETCHING_OFF:
      return{
        ...state,
        loading: false
      }
    case actions.GET_LEAGUE_REQUEST:
      return {
        loading:true
      };
    case actions.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        ...action.payload.data[0],
        error: null,
        loading: false
      };
    case actions.GET_LEAGUE_FAILURE:
      return {
        ...state,
        error: "Failed retreiving league data",
        loading: false
      };
    default:
      return state;
  }
};
