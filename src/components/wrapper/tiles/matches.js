import React from 'react';
import axios from 'axios';
import PlayerList from './matches/playerlist';
import GameStats from './matches/gamestats';
import PlayerStats from './matches/playerstats';
import ItemStats from './matches/itemstats';
const API_KEY = 'RGAPI-1b273f01-3d75-4db2-957c-8adb457e1ee2';
const proxyurl = "https://cors-anywhere.herokuapp.com/";


class Matches extends React.Component{ 
  fetchImages(){

  }
  render() {     
        
    const tiles = this.props.data.recent_matches.map((match,i)=>{
        var participantData,participantIdentityData;
        if(match.gameMode == "CLASSIC"){
          match.participantIdentities.forEach(function(element) {
            if(element.player.accountId == this.props.data.player.accountId){
              participantData = match.participants[element.participantId-1];
              participantIdentityData = element.player;              
            }           
          }, this);

          
          
          return(
            
            <article key={i} className={participantData.stats.win == true ? "is-success tile is-child notification" : "is-danger tile is-child notification"}>
              <div className="columns ">
                <GameStats match={match} player={this.props.data.player} />
                <PlayerStats match={match} player={this.props.data.player} />
                <ItemStats match={match} player={this.props.data.player} />
                <PlayerList match={match} />
              </div>
              

             
            </article> 
          );

        }else{

          return null;

        }
        
    })
              
    return(
      <div className="tile is-ancestor">  
        <div className="tile is-parent is-vertical is-12"> 
          {tiles}
        </div>
      </div> 

    );
   
  }
};
export default Matches;

