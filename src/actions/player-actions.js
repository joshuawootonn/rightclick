import * as types from "./types";
import * as api from "../api";

export const getPlayer = (playerName) => {
  const playerRequest = api.fetchPlayer(playerName);
  return dispatch => {
    dispatch({ type: types.PLAYER_FETCHING_ON });
    dispatch({ type: types.GET_PLAYER_REQUEST });
    return playerRequest.then(
      response => {
        dispatch({ type: types.GET_PLAYER_SUCCESS, payload: response });
        dispatch({ type: types.PLAYER_FETCHING_OFF });        
      },
      error => {
        dispatch({ type: types.GET_PLAYER_FAILURE, payload: error });
        dispatch({ type: types.PLAYER_FETCHING_OFF });        
        throw error;
      }
    );
  };
};
