import * as actions from "../actions/types";
import * as status from './status';
const initialState = {
  status: status.INIT
};
export const matchReducer = (state = initialState, action) => {
  switch (action.type) {    
    case actions.GET_MATCHES_REQUEST:
      return{
        status: status.LOADING
      }
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload.data.matches,
        status: status.SUCCESS
      };
    case actions.GET_MATCHES_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        error: "Failed retreiving matches data"
      };
    case actions.GET_MATCH_REQUEST:
      return {
        ...state,
        
      };
    case actions.GET_MATCH_SUCCESS:
      return {
        ...state,
        matches: state.matches.map((match,i) =>{     
          return i === action.index ? {...match, ...action.payload.data} : match
        })
      };
    case actions.GET_MATCH_FAILURE:
      return {
        ...state,
        error: "Failed retreiving match data"
      };
    default:
      return state;
  }
};
