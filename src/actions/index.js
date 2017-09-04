import axios from 'axios';

export const FETCH_PLAYER = 'fetch_player';

const API_KEY = 'RGAPI-f0eed8a3-bc92-4b3e-9ec7-a79164ab0cd5';
const proxyurl = "https://cors-anywhere.herokuapp.com/";


export function fetchPlayer(name){  
  const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${API_KEY}`; 
  const request = axios.get(proxyurl+url);
  return{
    type: FETCH_PLAYER,
    payload: request
  };
}