import * as types from "./types";
import * as api from "../api";

export const getPlayer = (playerName) => {
  console.log("fetch player: ",playerName);
  const playerRequest = api.fetchPlayer(playerName);
  return dispatch => {
    dispatch({ type: types.GET_PLAYER_REQUEST });
    return playerRequest.then(
      response => {
        dispatch({ type: types.GET_PLAYER_SUCCESS, payload: response });
           
      },
      error => {
        dispatch({ type: types.GET_PLAYER_FAILURE, payload: error });
              
        throw error;
      }
    );
  };
};
