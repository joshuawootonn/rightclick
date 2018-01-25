import axios from "axios";
import * as type from "./types";
import * as api from "../api";

export const getProfile = playerName => { 
  return (dispatch, getState) => {
    // Remember I told you dispatch() can now handle thunks?
    return dispatch(getPlayer(playerName)).then(() => {
      const id = getState().profile.player.id;
      return dispatch(getLeague(id))
    })
  }  
};
const getLeague = id => { 
  const leagueRequest = api.fetchLeague(id);
  return dispatch => {
    dispatch({ type: type.GET_LEAGUE_REQUEST });
    return leagueRequest.then(
      response => {
        dispatch({ type: type.GET_LEAGUE_SUCCESS, payload: response })
      },
      error => {
        dispatch({ type: type.GET_LEAGUE_FAILURE, payload:error})
        throw error
      }
    )
  }
}
const getPlayer = playerName =>{
  const playerRequest = api.fetchPlayer(playerName);
  return dispatch => {
    dispatch({ type: type.GET_PLAYER_REQUEST });
    return playerRequest.then(
      response => {
        dispatch({ type: type.GET_PLAYER_SUCCESS, payload: response })
      },
      error => {
        dispatch({ type: type.GET_PLAYER_FAILURE, payload: error})
        throw error
      }
    )
  }
}
