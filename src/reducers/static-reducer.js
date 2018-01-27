import * as actions from "../actions/types";
import * as status from './status';
const initialState = {
  status: status.INIT
};
export const staticReducer = (state = initialState, action) => {
  switch (action.type) {    
    case actions.GET_VERSION_LOCAL:
      return {
        ...state,
        status: status.SUCCESS,
        version: action.payload.data,
      };
    case actions.GET_VERSION_REQUEST:
      return {
        ...state,
        status: status.LOADING,
        version: null,
      };
    case actions.GET_VERSION_SUCCESS:
      localStorage.setItem("riot_version", JSON.stringify(action.payload));
      return {
        ...state,
        status: status.SUCCESS,
        version: action.payload.data,
      };
    case actions.GET_VERSION_FAILURE:
      return {
        ...state,
        version: null,
        status: status.ERROR,
        error: "Failed retreiving version data"
      };
    case actions.GET_CHAMPION_LOCAL:
      return {
        ...state,
        status: status.SUCCESS,
        champion: action.payload.data
      };
    case actions.GET_CHAMPION_REQUEST:
      return {
        ...state,
        status: status.LOADING,
        champion: null
      };
    case actions.GET_CHAMPION_SUCCESS:
      localStorage.setItem("riot_champion", JSON.stringify(action.payload));
      return {
        ...state,
        status: status.SUCCESS,
        champion: action.payload.data
      };
    case actions.GET_CHAMPION_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        champion: null,
        error: "Failed retreiving champion data"
      };
    case actions.GET_ITEM_LOCAL:
      return {
        ...state,
        status: status.SUCCESS,
        item: action.payload.data
      };
    case actions.GET_ITEM_REQUEST:
      return {
        ...state,
        status: status.LOADING,
        item: null
      };
    case actions.GET_ITEM_SUCCESS:
      localStorage.setItem("riot_item", JSON.stringify(action.payload));
      return {
        ...state,
        status: status.SUCCESS,
        item: action.payload.data
      };
    case actions.GET_ITEM_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        item: null,
        error: "Failed retreiving item data"
      };
    case actions.GET_SUMMONER_LOCAL:
      return {
        ...state,
        status: status.SUCCESS,
        summoner: action.payload.data
      };
    case actions.GET_SUMMONER_REQUEST:
      return {
        ...state,
        status: status.LOADING,
        summoner: null
      };
    case actions.GET_SUMMONER_SUCCESS:
      localStorage.setItem("riot_summoner", JSON.stringify(action.payload));
      return {
        ...state,
        status: status.SUCCESS,
        summoner: action.payload.data
      };
    case actions.GET_SUMMONER_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        summoner: null,
        error: "Failed retreiving summoner data"
      };

    default:
      return state;
  }
};
