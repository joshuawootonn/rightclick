import axios from 'axios';
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "RGAPI-8b52f489-65b4-4be9-b56a-1ba695ba96e9";
export function fetchPlayer(term){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`)
}