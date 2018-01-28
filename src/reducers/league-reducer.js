import * as actions from "../actions/types";
import * as status from './status';
const initialState = {
  status: status.INIT
};

export const leagueReducer = (state = initialState, action) => {
  switch (action.type) {        
    case actions.GET_LEAGUE_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        ...action.payload.data[0]
      };
    case actions.GET_LEAGUE_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        error: "Failed retreiving league data"
      };
    case actions.GET_DIVISION_REQUEST:
      return state;
    case actions.GET_DIVISION_SUCCESS:
      return {
        ...state,
        division:action.payload.data.entries,
        status: status.SUCCESS
      };
    case actions.GET_DIVISION_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        error: "Failed retreiving division data"
      };
    default:
      return state;
  }
};
