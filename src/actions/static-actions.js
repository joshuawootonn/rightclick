import axios from "axios";
import * as types from "./types";
import * as api from "../api";

export const getStatic = () => { 
  return dispatch => {
    dispatch(onFetching());   
    dispatch(getVersion()) 
    dispatch(getChampion()) 
    dispatch(getSummoner()) 
    dispatch(getItem())
    dispatch(offFetching()); 
         
  };
}
const onFetching = () => {
  return {
    type: types.STATIC_FETCHING_ON
  };
};
const offFetching = () => {
  return {
    type: types.STATIC_FETCHING_OFF
  };
};
const getVersion = () => {
  // Checking local storage for the cached static data
  const versionCache = localStorage.getItem("riot_version");
  if (versionCache) {    
    return dispatch => {
      dispatch({
        type: types.GET_VERSION_LOCAL,
        payload: JSON.parse(versionCache)
      })      
    };
  }
  // If none is found retreive it
  const versionRequest = api.fetchVersion();
  return dispatch => {
    dispatch({ type: types.GET_VERSION_REQUEST });
    return versionRequest.then(
      response => {
        dispatch({
          type: types.GET_VERSION_SUCCESS,
          payload: response
        });
      },
      error => {
        dispatch({
          type: types.GET_VERSION_FAILURE,
          payload: error
        });
        throw error;
      }
    );
  };
};

const getChampion = () => {
  // Checking local storage for the cached static data
  const championCache = localStorage.getItem("riot_champion");
  if (championCache) {    
    return dispatch => {
      dispatch({
        type: types.GET_CHAMPION_LOCAL,
        payload: JSON.parse(championCache)
      })      
    };
  }
  // If none is found retreive it
  const championRequest = api.fetchChampion();
  return dispatch => {
    dispatch({ type: types.GET_CHAMPION_REQUEST });
    return championRequest.then(
      response => {
        dispatch({
          type: types.GET_CHAMPION_SUCCESS,
          payload: response
        });
      },
      error => {
        dispatch({
          type: types.GET_CHAMPION_FAILURE,
          payload: error
        });
        throw error;
      }
    );
  };
};

const getItem = () => {
  // Checking local storage for the cached static data
  const itemCache = localStorage.getItem("riot_item");
  if (itemCache) {    
    return dispatch => {
      dispatch({
        type: types.GET_ITEM_LOCAL,
        payload: JSON.parse(itemCache)
      })      
    };
  }
  // If none is found retreive it
  const itemRequest = api.fetchItem();
  return dispatch => {
    dispatch({ type: types.GET_ITEM_REQUEST });
    return itemRequest.then(
      response => {
        dispatch({
          type: types.GET_ITEM_SUCCESS,
          payload: response
        });
      },
      error => {
        dispatch({
          type: types.GET_ITEM_FAILURE,
          payload: error
        });
        throw error;
      }
    );
  };
};

const getSummoner = () => {
  // Checking local storage for the cached static data
  const summonerCache = localStorage.getItem("riot_summoner");
  if (summonerCache) {    
    return dispatch => {
      dispatch({
        type: types.GET_SUMMONER_LOCAL,
        payload: JSON.parse(summonerCache)
      })      
    };
  }
  // If none is found retreive it
  const summonerRequest = api.fetchSummoner();
  return dispatch => {
    dispatch({ type: types.GET_SUMMONER_REQUEST });
    return summonerRequest.then(
      response => {
        dispatch({
          type: types.GET_SUMMONER_SUCCESS,
          payload: response
        });
      },
      error => {
        dispatch({
          type: types.GET_SUMMONER_FAILURE,
          payload: error
        });
        throw error;
      }
    );
  };
};
