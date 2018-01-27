import axios from "axios";
import * as types from "./types";
import * as api from "../api";
import {getPlayer} from './player-actions';

export const getMatch = playerName => {
  return (dispatch, getState) => {
    dispatch(onFetching());
    return dispatch(getPlayer(playerName)).then(() => {
      const accountId = getState().player.accountId;
      return dispatch(getMatches(accountId)).then(() => {      
        return dispatch(offFetching());
      });
    })
  };
};
const onFetching = () => {
  return {
    type: types.MATCH_FETCHING_ON
  };
};
const offFetching = () => {
  return {
    type: types.MATCH_FETCHING_OFF
  };
};
const getMatches = accountId => {
  const matchesRequest = api.fetchMatches(accountId);
  return dispatch => {
    dispatch({ type: types.GET_MATCHES_REQUEST });
    return matchesRequest.then(
      response => {
        dispatch({ type: types.GET_MATCHES_SUCCESS, payload: response });
      },
      error => {
        dispatch({ type: types.GET_MATCHES_FAILURE, payload: error });
        throw error;
      }
    );
  };
};
const getMatchData = gameId => {
  const matchRequest = api.fetchMatch(gameId);
  return dispatch => {
    dispatch({ type: types.GET_MATCH_REQUEST });
    return matchRequest.then(
      response => {
        dispatch({ type: types.GET_MATCH_SUCCESS, payload: response });
      },
      error => {
        dispatch({ type: types.GET_MATCH_FAILURE, payload: error });
        throw error;
      }
    );
  };
};
