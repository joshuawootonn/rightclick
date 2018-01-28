import * as types from "./types";
import * as api from "../api";
import { getPlayer } from "./player-actions";

export const getLeague = playerName => {
    return (dispatch, getState) => {
      return dispatch(getPlayer(playerName)).then(() => {
        const id = getState().player.id;
        return dispatch(getLeagueData(id)).then(() => {
          const leagueId = getState().league.leagueId
          return dispatch(getDivisionData(leagueId));
        })
      });
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
const getDivisionData = id => {
  const divisionRequest = api.fetchDivision(id);
  return dispatch => {
    dispatch({ type: types.GET_DIVISION_REQUEST });
    return divisionRequest.then(
      response => {
        dispatch({ type: types.GET_DIVISION_SUCCESS, payload: response });
      },
      error => {
        dispatch({ type: types.GET_DIVISION_FAILURE, payload: error });
        throw error;
      }
    );
  };
}
