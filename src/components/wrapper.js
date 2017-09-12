import React from 'react';


import PlayerList from './matches/playerlist';
import GameStats from './matches/gamestats';
import PlayerStats from './matches/playerstats';
import ItemStats from './matches/itemstats';
import Profile from './stats/profile';
import Ladder from './stats/ladder';


class Wrapper extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const data = {
      player: this.props.data.player,
      versions: this.props.data.versions,
      champions: this.props.data.champions,
      items: this.props.data.items,
      summoners: this.props.data.summoners,
      league: this.props.data.league
    }
    var m = null;
    const matches = this.props.data.recent_matches.map((match, i) => {
      var participantData, participantIdentityData;
      if (match.gameMode == "CLASSIC") {
        match.participantIdentities.forEach(function (element) {
          if (element.player.accountId == this.props.data.player.accountId) {
            participantData = match.participants[element.participantId - 1];
            participantIdentityData = element.player;
          }
        }, this);
        if(i == 0 ){
          m = match;
        }
        

       
        return (

          <article key={i} className="tile is-child box match" >
            <div className="columns">
              <GameStats match={match} data={data} />
              <PlayerStats match={match} data={data} />
              <ItemStats match={match} data={data} />
              <PlayerList match={match} data={data} />
            </div>
          </article>
        );

      } else {

        return null;

      }
      
    })
    console.log(this.props.data);

    return (
      <div className="columns">
        <div className="column is-3">
          <div className="tile is-vertical">
            <Profile data={data} />
            {this.props.data.league  ? <Ladder data={data} /> : null }
          </div>
        </div>
        <div className="column is 9">
          <div className="tile is-vertical">
            {matches}
          </div>
        </div>
      </div>

    );

  }
};
export default Wrapper;
