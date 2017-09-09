import React from 'react';
import Header from './components/header';


import Intro from './components/intro'
import Loading from './components/loading';
import Wrapper from './components/wrapper';

import axios from 'axios';

const API_KEY = 'RGAPI-6bac5dbd-d6c4-4c67-b702-e2e3300dc294';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      player: {},
      recent_matches:[],
      currentPage: 1,
      champions: null,
      versions:null,
      items: null,
      summoners: null,
      profileIcons: null
    };

    this.playerSearch = this.playerSearch.bind(this);  
    this.matchSearch = this.matchSearch.bind(this);  
    this.championSearch = this.championSearch.bind(this);
    this.versionSearch = this.versionSearch.bind(this);
    this.itemsSearch = this.itemsSearch.bind(this);
    this.summonerSearch = this.summonerSearch.bind(this);
   }
  
  
  playerSearch(term){    
    this.setState({currentPage: 2});    
    const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`; 
    const request = axios.get(proxyurl+url)
    .then((response) => {
      if(response.data){

        this.setState({ player: response.data,
                        currentPage:3});
        this.matchSearch();
        this.versionSearch();
        this.championSearch();
        this.itemsSearch();
        this.summonerSearch();
      }else{
        console.log("error");
      }      
    })    
  }
  versionSearch(){
    const cachedVersions = localStorage.getItem("riot_versions");
    if(cachedVersions){
      this.setState({ versions: JSON.parse(cachedVersions)});
      return;
    }
    const url = `https://na1.api.riotgames.com/lol/static-data/v3/versions?api_key=${API_KEY}`; 
    const request = axios.get(proxyurl+url)
    .then((response) => {
      if(response.data){      
        localStorage.setItem("riot_versions", JSON.stringify(response.data));
        this.setState({versions: response.data});
        


      }else{
        console.log("Error retrieving versions.");
      }      
    })  
  }
  championSearch(){
    const cachedChampions = localStorage.getItem("riot_champions");
    if(cachedChampions){
      this.setState({ champions: JSON.parse(cachedChampions)});
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=${API_KEY}&locale=en_US&tags=keys&dataById=true`; 
    const request = axios.get(proxyurl+url)
    .then((response) => {
      if(response.data){      
        localStorage.setItem("riot_champions", JSON.stringify(response.data));
        this.setState({champions: response.data});
        
      }else{
        console.log("Error retrieving champions.");
      }      
    })  
  }
  itemsSearch(){
    const cachedItems = localStorage.getItem("riot_items");
    if(cachedItems){
      this.setState({ items: JSON.parse(cachedItems)});
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/items?api_key=${API_KEY}&locale=en_US`; 
    const request = axios.get(proxyurl+url)
    .then((response) => {
      if(response.data){      
        localStorage.setItem("riot_items", JSON.stringify(response.data));
        this.setState({items: response.data});
        
      }else{
        console.log("Error retrieving Items.");
      }      
    })  
  }
  summonerSearch(){
    const cachedSummoners = localStorage.getItem("riot_summoners");
    if(cachedSummoners){
      this.setState({ summoners: JSON.parse(cachedSummoners)});
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/summoner-spells?api_key=${API_KEY}&locale=en_US&dataById=false`; 
    const request = axios.get(proxyurl+url)
    .then((response) => {
      if(response.data){      
        localStorage.setItem("riot_summoners", JSON.stringify(response.data));
        this.setState({summoners: response.data});
        
      }else{
        console.log("Error retrieving summoners.");
      }      
    })  
  }


  matchSearch(){
    const url = `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${this.state.player.accountId}/recent?api_key=${API_KEY}`; 
    
    const request = axios.get(proxyurl+url)
    .then((response) => {
      this.setState({recent_matches: []})
      if(response.data){
        response.data.matches.forEach((element, i)=>{
          
          const subUrl = `https://na1.api.riotgames.com/lol/match/v3/matches/${element.gameId}?api_key=${API_KEY}`;
          const subRequest = axios.get(proxyurl+subUrl).
          then((subResponse) => {
            if(subResponse.data){
              var array = this.state.recent_matches.slice();
              array.push(subResponse.data);
              this.setState({recent_matches: array})
            }
          })  
       
        },this);
        
      }else{
        console.log("error");
      }      
    }) 
    
    
  }

  render(){
    const playerSearch = this.playerSearch;
    const matchSearch = this.matchSearch;
    
    const data = {player: this.state.player,
                  recent_matches: this.state.recent_matches,
                  versions: this.state.versions,
                  champions: this.state.champions,
                  items: this.state.items,
                  summoners:this.state.summoners};
    return(
      <div className="container wrapper">     
           
          <Header onSearch={playerSearch}/> 
          {(this.state.currentPage == 1) ? <Intro /> : null}
          {(this.state.currentPage == 2) ? <Loading /> : null}
          {(this.state.currentPage == 3) ? <Wrapper data={data} /> : null}
      </div>
    ) 
  }
}
export default App;