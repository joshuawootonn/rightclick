import React from 'react';
import Header from './components/header';


import Intro from './components/intro'
import Loading from './components/loading';
import Wrapper from './components/wrapper';

import axios from 'axios';

const API_KEY = 'RGAPI-6944fdb7-dada-4c6d-8867-95ceb107f006';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      player: {},
      recent_matches:[],
      currentPage: 1,
    };
    this.playerSearch = this.playerSearch.bind(this);  
    this.matchSearch = this.matchSearch.bind(this);  

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
      }else{
        console.log("error");
      }      
    })    
  }


  matchSearch(){
    const url = `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${this.state.player.accountId}/recent?api_key=${API_KEY}`; 
    
    const request = axios.get(proxyurl+url)
    .then((response) => {

      if(response.data){
        response.data.matches.forEach((element)=>{
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
      console.log(this.state);
    }) 
    
  }

  render(){
    const playerSearch = this.playerSearch;
    const matchSearch = this.matchSearch;
    const data = {player: this.state.player,
                  recent_matches: this.state.recent_matches};
    return(
      <div className="container">     
           
          <Header onSearch={playerSearch}/> 
          {(this.state.currentPage == 1) ? <Intro /> : null}
          {(this.state.currentPage == 2) ? <Loading /> : null}
          {(this.state.currentPage == 3) ? <Wrapper data={data} /> : null}
      </div>
    ) 
  }
}
export default App;