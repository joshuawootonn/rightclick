import axios from "axios";
import * as types from "./types";
import * as api from "../api";
import { getPlayer } from "./player-actions";

export const getLeague = playerName => {
    return (dispatch, getState) => {
      dispatch(toggleFetching());
      return dispatch(getPlayer(playerName)).then(() => {
        const id = getState().player.player.id;
        return dispatch(getLeagueData(id)).then(() => {
          return dispatch(toggleFetching());
        });
      });
    };
};
const toggleFetching = () => {
  return {
    type: types.TOGGLE_LEAGUE_FETCHING
  };
};
const getLeagueData = id => {
  const leagueRequest = api.fetchLeague(id);
  return dispatch => {
    dispatch({ type: types.GET_LEAGUE_REQUEST });
    return leagueRequest.then(
      response => {
        dispatch({ type: types.GET_LEAGUE_SUCCESS, payload: response });
      },
      error => {
        dispatch({ type: types.GET_LEAGUE_FAILURE, payload: error });
        throw error;
      }
    );
  };
};
