import React from 'react';
import moment from 'moment';

class GameStats extends React.Component{ 
 
  render() {     
    var participantData,participantIdentityData;
    this.props.match.participantIdentities.forEach(function(element) {
      if(element.player.accountId == this.props.player.accountId){
        participantData = this.props.match.participants[element.participantId-1];
        participantIdentityData = element.player;              
      }           
    }, this);
    var gameType;
    switch(this.props.match.queueId){
      case 420:
      case 4: 
        gameType = "Ranked Solo";
        break;
      case 2:
      case 14:
      case 400:
      case 430:
        gameType = "Normal";
        break;
      default:
        gameType = "Unknown Game Type";
    }


    var t = new Date(this.props.match.gameCreation);
    var timeOfGame = moment(t).format("DD/MM/YYYY HH:mm:ss");

    var n  = Date.now();
    var timeOfNow = moment(n).format("DD/MM/YYYY HH:mm:ss");

    var ms = moment(timeOfNow,"DD/MM/YYYY HH:mm:ss").diff(moment(timeOfGame,"DD/MM/YYYY HH:mm:ss"));
    var d = moment.duration(ms);
    var gameTime;
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    if(Math.floor(d.asHours()) == 0){
      gameTime = moment.utc(ms).format("mm") + " minutes ago";
    }else if(Math.floor(d.asHours()) == 1){
      gameTime = "an hour ago";
    }else if(Math.floor(d.asHours()) < 24){
      gameTime = Math.floor(d.asHours()) + " hours ago";
    }else if(Math.floor(d.asHours()) >24 ){
      gameTime = Math.floor(d.asHours()/24) +" days ago";
    }else{
      gameTime = "Time Error";
    }
    
    
              
    return(
      <div className="column">
          <p className="title is-6">{gameType}</p>
          <p className="subtitle is-6">{gameTime}</p>
          <br />
          <p className="title is-6">{participantData.stats.win == true ? "Victory" : "Defeat"}</p>
          <p className="subtitle is-6">{new Date(this.props.match.gameDuration * 1000).toISOString().substr(14, 5)}</p>

      </div>
    );   
  }
};
export default GameStats;
