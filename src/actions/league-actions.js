import * as types from "./types";
import * as api from "../api";
import { getPlayer } from "./player-actions";

export const getLeague = playerName => {
    return (dispatch, getState) => {
      dispatch(onFetching());
      return dispatch(getPlayer(playerName)).then(() => {
        const id = getState().player.id;
        return dispatch(getLeagueData(id)).then(() => {
          return dispatch(offFetching());
        });
      });
    };
};
const onFetching = () => {
  return {
    type: types.LEAGUE_FETCHING_ON
  };
};
const offFetching = () => {
  return {
    type: types.LEAGUE_FETCHING_OFF
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
