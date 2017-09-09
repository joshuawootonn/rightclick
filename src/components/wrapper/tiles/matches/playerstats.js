import React from 'react';
import moment from 'moment';

class PlayerStats extends React.Component{ 
 
  render() {   
    
    var participantData,participantIdentityData, index;
    this.props.match.participantIdentities.forEach(function(element) {
      if(element.player.accountId == this.props.data.player.accountId){
        index = element.participantId-1;
        participantData = this.props.match.participants[index];
        participantIdentityData = element.player;              
      }           
    }, this);
    
    var cs = (participantData.stats.totalMinionsKilled +participantData.stats.neutralMinionsKilled)
    var csPerMin = (cs/(this.props.match.gameDuration /60)).toFixed(1);
    
    var totalKills = 0;
    this.props.match.participants.forEach(function(element, i){
      if(index < 5 && i < 5)
        totalKills += element.stats.kills;
      else if(index >= 5 && i >= 5)
        totalKills += element.stats.kills;
    })
    var kills = participantData.stats.kills;
    var assists = participantData.stats.assists;
    var deaths = participantData.stats.deaths;
    var kp = ((kills/totalKills) * 100).toFixed(0);
    var kda = ((kills+assists)/deaths).toFixed(2);

    var championName = this.props.data.champions.keys[participantData.championId];
    
    return(
      <div className="column">
          <div className="columns">
            <div className="column">
              <figure class="image is-128x128">
                { championName!=null ?  <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/champion/${championName}.png`} /> : null }               
              </figure>
              
              <p className="title is-6">{participantData.championId}</p>
              <p className="subtitle is-6">{participantData.spell1Id},{participantData.spell2Id},{participantData.masteries[5].masteryId}</p>

            </div>
            <div className="column">
              <p className="subtitle is-6">{kills}/{deaths}/{assists}</p>        
              <p className="subtitle is-6">KDA: {kda}</p>
              <p className="subtitle is-6">CS: {cs}({csPerMin})</p>
              <p className="subtitle is-6">KP: {kp}%</p>             
            </div>
          </div>
          
      </div>
    );   
  }
};
export default PlayerStats;
