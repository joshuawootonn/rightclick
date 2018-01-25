import axios from "axios";
import { FETCH_PLAYER, TOGGLE_PLAYER } from "./types";
import * as api from "../api";
export const togglePlayer = () => {
  return {
    type: TOGGLE_PLAYER
  };
};
export const fetchPlayer = playerName => {
  const request = api.fetchPlayer(playerName);
  return dispatch => {
    dispatch(togglePlayer());
    request
      .then(({ data }) => {
        dispatch({ type: FETCH_PLAYER, payload: data });
        dispatch(togglePlayer());
      })
      .catch(() => {
        dispatch(togglePlayer());
      });
  };
};
