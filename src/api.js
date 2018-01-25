import axios from 'axios';
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "RGAPI-7a7124cf-66b3-4c07-83f6-df33276b4a2c";
export function fetchPlayer(term){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`)
}