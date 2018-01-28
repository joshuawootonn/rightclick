import axios from 'axios';
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "RGAPI-7fd3b879-2a08-4834-b49a-6d6992fb0ad0";


// Player

export function fetchPlayer(term){  
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`);
}

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

// League

export function fetchLeague(id){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/${id}?api_key=${API_KEY}`);
}

// Match

export function fetchMatches(accountId){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}/recent?api_key=${API_KEY}`);
}
export function fetchMatch(gameId){
  return axios.get(`${PROXY}https://na1.api.riotgames.com/lol/match/v3/matches/${gameId}?api_key=${API_KEY}`);
}