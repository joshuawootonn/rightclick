import axios from 'axios';
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "RGAPI-7a7124cf-66b3-4c07-83f6-df33276b4a2c";

// Static

export function fetchVersion(){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/static-data/v3/versions?api_key=${API_KEY}`);
}
export function fetchChampion(){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=${API_KEY}&locale=en_US&tags=keys&dataById=true`);
}
export function fetchItem(){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/static-data/v3/items?api_key=${API_KEY}&locale=en_US`);
}
export function fetchSummoner(){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/static-data/v3/summoner-spells?api_key=${API_KEY}&locale=en_US&dataById=false`);
}


// Profile

export function fetchPlayer(term){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`);
}
export function fetchLeague(id){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/${id}?api_key=${API_KEY}`);
}

// Match