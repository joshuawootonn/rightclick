import React from 'react';
import Header from './components/header';
import Wrapper from './components/wrapper';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      player: {},
      wrapperState: 1
    };
    this.playerSearch = this.playerSearch.bind(this);  
  }
  
  
  playerSearch(term){
    this.setState({wrapperState: 2});
    const API_KEY = 'RGAPI-7ca8f529-2e0a-42db-90f5-e304193cbcfd';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`; 
    const request = axios.get(proxyurl+url)
    .then((response) => {
      if(response.data){
        this.setState({ player: response.data,
                        wrapperState:3});
      }else{
        console.log("error");
      }      
    })
    
  }
  render(){
    const playerSearch = this.playerSearch;
    const data = {player: this.state.player};
    const wrapperState = this.state.wrapperState;
    return(
      <div>        
        <section className="hero is-fullheight">
          <Header onSearch={playerSearch} />       
          <div className="hero-body">
            <div className="container has-text-centered">           

              <Wrapper  wrapperState={wrapperState} data={data}/>  

            </div>
          </div>    
        </section>
      </div>
    ) 
  }
}
export default App;