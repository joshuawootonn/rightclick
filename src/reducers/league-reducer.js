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

      const sortedDivision = action.payload.data.entries.sort((a,b) =>{
        if(a.leaguePoints < b.leaguePoints)
          return 1;
        else if(b.leaguePoints < a.leaguePoints)
          return -1;
        else
          return 0;
      })
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
