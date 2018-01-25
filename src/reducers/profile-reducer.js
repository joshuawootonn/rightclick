import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PLAYER_REQUEST:
      return {
        ...state,
        player: null,
        error: null,
        loading: true
      };
    case actions.GET_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.payload.data,
        error: null,
        loading: true
      };
    case actions.GET_PLAYER_FAILURE:
      return {
        ...state,
        player: null,
        error: "Failed retreiving player data",
        loading: false
      };
    case actions.GET_LEAGUE_REQUEST:
      return {
        ...state,
        league: null,
        error: null,
        loading: true
      };
    case actions.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        league: action.payload.data,
        error: null,
        loading: false
      };
    case actions.GET_LEAGUE_FAILURE:
      return {
        ...state,
        league: null,
        error: "Failed retreiving league data",
        loading: false
      };
    default:
      return state;
  }
};
