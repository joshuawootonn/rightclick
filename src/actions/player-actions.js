import axios from "axios";
import * as types from "./types";
import * as api from "../api";

export const getPlayer = (playerName) => {
  const playerRequest = api.fetchPlayer(playerName);
  return dispatch => {
    dispatch({ type: types.TOGGLE_PLAYER_FETCHING });
    dispatch({ type: types.GET_PLAYER_REQUEST });
    return playerRequest.then(
      response => {
        dispatch({ type: types.GET_PLAYER_SUCCESS, payload: response });
        dispatch({ type: types.TOGGLE_PLAYER_FETCHING });        
      },
      error => {
        dispatch({ type: types.GET_PLAYER_FAILURE, payload: error });
        dispatch({ type: types.TOGGLE_PLAYER_FETCHING });        
        throw error;
      }
    );
  };
};
