import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MATCH_FETCHING_ON:
      return{
        ...state,
        loading: true
      }
    case actions.MATCH_FETCHING_OFF:
      return{
        ...state,
        loading: false
      }
    case actions.GET_MATCHES_REQUEST:
      return{
        loading:true
      }
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload.data.matches,
        error: null
      };
    case actions.GET_MATCHES_FAILURE:
      return {
        ...state,
        error: "Failed retreiving player data"
      };
    case actions.GET_MATCH_REQUEST:
      return {
        ...state,
        error: null
      };
    case actions.GET_MATCH_SUCCESS:
      console.log(action.index)
      console.log(state.matches)
      return {
        ...state,
        matches: state.matches.map((match,i) =>{     
          return i == action.index ? {...match, ...action.payload.data} : match
        }),
        error: null
      };
    case actions.GET_MATCH_FAILURE:
      return {
        ...state,
        error: "Failed retreiving league data"
      };
    default:
      return state;
  }
};
