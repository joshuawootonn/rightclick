import React from 'react';


import PlayerList from './matches/playerlist';
import GameStats from './matches/gamestats';
import PlayerStats from './matches/playerstats';
import ItemStats from './matches/itemstats';
import Profile from './stats/profile';



class Wrapper extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const matches = this.props.data.recent_matches.map((match, i) => {
      var participantData, participantIdentityData;
      if (match.gameMode == "CLASSIC") {
        match.participantIdentities.forEach(function (element) {
          if (element.player.accountId == this.props.data.player.accountId) {
            participantData = match.participants[element.participantId - 1];
            participantIdentityData = element.player;
          }
        }, this);


        const data = {
          player: this.props.data.player,
          versions: this.props.data.versions,
          champions: this.props.data.champions,
          items: this.props.data.items,
          summoners: this.props.data.summoners
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
    const data = {
      player: this.props.data.player,
      versions: this.props.data.versions,
      champions: this.props.data.champions,
      items: this.props.data.items,
      summoners: this.props.data.summoners
    }

    return (
      <div className="tile  is-ancestor">
        <div className="tile is-parent is-vertical is-3">
          <Profile data={data} />
        </div>
        <div className="tile is-parent is-vertical is-9">
          {matches}
        </div>
      </div>

    );

  }
};
export default Wrapper;
