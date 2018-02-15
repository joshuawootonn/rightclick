import * as types from "./types";
import * as api from "../api";
import { getPlayer } from "./player-actions";

export const getMatch = playerName => {
  console.log("fetch match1: ",playerName);
  let count = 0;
  return (dispatch, getState) => {
    
    return dispatch(getPlayer(playerName)).then(() => {
      const accountId = getState().player.accountId;
      console.log("fetch match2: ",getState().player);
      return dispatch(getMatches(accountId)).then(() => {
        getState().match.matches.forEach((ele, i) => {
          
            dispatch(getMatchData(ele.gameId, i)).then(()=>{
              count+= i;
              if(count === 1){
                dispatch({type: types.GET_DIVISION_SUCCESS_ALL});
              }
            });
                    
        });
      });
    });
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
const getMatchData = (gameId, i) => {
  const matchRequest = api.fetchMatch(gameId);
  return dispatch => {
    dispatch({ type: types.GET_MATCH_REQUEST });
    return matchRequest.then(
      response => {
        dispatch({
          type: types.GET_MATCH_SUCCESS,
          payload: response,
          index: i
        });
      },
      error => {
        dispatch({ type: types.GET_MATCH_FAILURE, payload: error });
        throw error;
      }
    );
  };
};
