import React from 'react';
import axios from 'axios';
import PlayerList from './matches/playerlist';
import GameStats from './matches/gamestats';
import PlayerStats from './matches/playerstats';
import ItemStats from './matches/itemstats';


class Matches extends React.Component{ 
  constructor(props){
    super(props)

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

          
          const data={player: this.props.data.player,
                      versions: this.props.data.versions,
                      champions: this.props.data.champions,
                      items: this.props.data.items}
          return(
            
            <article key={i} className={participantData.stats.win == true ? "is-success tile is-child notification" : "is-danger tile is-child notification"}>
              <div className="columns">
                <GameStats match={match} data={data} />
                <PlayerStats match={match} data={data} />
                <ItemStats match={match} data={data} />
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

