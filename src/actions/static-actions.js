import axios from "axios";
import * as types from "./types";
import * as api from "../api";

export const getVersion = () => {
  // Checking local storage for the cached static data
  const versionCache = localStorage.getItem("riot_versions");
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
