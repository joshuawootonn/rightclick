import React from 'react';

import axios from 'axios';

const API_KEY = 'RGAPI-1b273f01-3d75-4db2-957c-8adb457e1ee2';
const proxyurl = "https://cors-anywhere.herokuapp.com/";


class Matches extends React.Component{ 
  fetchImages(){

  }
  render() {     
        
    const tiles = this.props.data.recent_matches.map((match,i)=>{
        var participantData,participantIdentityData,playerlist=[],championlist=[],playerChampion;
        if(match.gameMode == "CLASSIC"){

          match.participantIdentities.forEach(function(element) {
            if(element.player.accountId == this.props.data.player.accountId){
              participantData = match.participants[element.participantId-1];
              participantIdentityData = element.player;              
            }
            playerlist.push(element.player.summonerName);
          }, this);

          
          match.participants.forEach(function(element) {            
            championlist.push(element.championId)
          }, this);

          playerChampion = playerlist.map((player,i)=>{
            return(<tr><td>{playerlist[i]}</td><td>{championlist[i]}</td></tr>);
          })
          return(
            
            <article key={i} className={participantData.stats.win == true ? "is-success tile is-child notification" : "is-danger tile is-child notification"}>
              <div className="columns">
                <div className="column">
                  <p className="title">{new Date(match.gameDuration * 1000).toISOString().substr(14, 5)}</p>
                  <p className="title">{participantData.stats.kills}/{participantData.stats.deaths}/{participantData.stats.assists}</p>
                </div>
                <div className="column"></div>
                <div className="column">
                  <table>   
                    <tbody>
                      {playerChampion}     
                    </tbody>
                  </table>               
                </div>
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

