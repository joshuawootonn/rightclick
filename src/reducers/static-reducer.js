import * as actions from "../actions/types";
const initialState = {
  loading: false
};
export const staticReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STATIC_FETCHING_ON:
      return{
        ...state,
        loading: true
      }
    case actions.STATIC_FETCHING_OFF:
      return{
        ...state,
        loading: false
      }
    case actions.GET_VERSION_LOCAL:
      return {
        ...state,
        version: action.payload.data,
        error: null
      };
    case actions.GET_VERSION_REQUEST:
      return {
        ...state,
        version: null,
        error: null
      };
    case actions.GET_VERSION_SUCCESS:
      localStorage.setItem("riot_version", JSON.stringify(action.payload));
      return {
        ...state,
        version: action.payload.data,
        error: null
      };
    case actions.GET_VERSION_FAILURE:
      return {
        ...state,
        version: null,
        error: "Failed retreiving version data"
      };
    case actions.GET_CHAMPION_LOCAL:
      return {
        ...state,
        champion: action.payload.data,
        error: null
      };
    case actions.GET_CHAMPION_REQUEST:
      return {
        ...state,
        champion: null,
        error: null
      };
    case actions.GET_CHAMPION_SUCCESS:
      localStorage.setItem("riot_champion", JSON.stringify(action.payload));
      return {
        ...state,
        champion: action.payload.data,
        error: null
      };
    case actions.GET_CHAMPION_FAILURE:
      return {
        ...state,
        champion: null,
        error: "Failed retreiving champion data"
      };
    case actions.GET_ITEM_LOCAL:
      return {
        ...state,
        item: action.payload.data,
        error: null
      };
    case actions.GET_ITEM_REQUEST:
      return {
        ...state,
        item: null,
        error: null
      };
    case actions.GET_ITEM_SUCCESS:
      localStorage.setItem("riot_item", JSON.stringify(action.payload));
      return {
        ...state,
        item: action.payload.data,
        error: null
      };
    case actions.GET_ITEM_FAILURE:
      return {
        ...state,
        item: null,
        error: "Failed retreiving item data"
      };
    case actions.GET_SUMMONER_LOCAL:
      return {
        ...state,
        summoner: action.payload.data,
        error: null
      };
    case actions.GET_SUMMONER_REQUEST:
      return {
        ...state,
        summoner: null,
        error: null
      };
    case actions.GET_SUMMONER_SUCCESS:
      localStorage.setItem("riot_summoner", JSON.stringify(action.payload));
      return {
        ...state,
        summoner: action.payload.data,
        error: null
      };
    case actions.GET_SUMMONER_FAILURE:
      return {
        ...state,
        summoner: null,
        error: "Failed retreiving summoner data"
      };

    default:
      return state;
  }
};
