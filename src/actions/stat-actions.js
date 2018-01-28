import * as types from "./types";
import * as api from "../api";
import { getPlayer } from "./player-actions";

export const getStat = playerName => {
  return (dispatch, getState) => {
    return dispatch(getPlayer(playerName)).then(() => {
      
    });
  };
}