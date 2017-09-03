import React from 'react';
import axios from 'axios';

import SearchBar from './components/search_bar';
import Header from './components/header';

const API_KEY = 'RGAPI-f0eed8a3-bc92-4b3e-9ec7-a79164ab0cd5';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      player: {}
    }    
  }
  
  playerSearch(term){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=RGAPI-f0eed8a3-bc92-4b3e-9ec7-a79164ab0cd5`; 
    axios.get(proxyurl+url).then(function(results){
      
      console.log(results.data);
    })
  }
  render(){
    const playerSearch = this.playerSearch;
    return(
      <div>        
        <section className="hero is-fullheight">
          <Header />        

          <div className="hero-body">
            <div className="container has-text-centered">              
              <SearchBar onSearch={playerSearch}/>              
            </div>
          </div>

          
        </section>
      </div>
    ) 
  }
}
export default App;