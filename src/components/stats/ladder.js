import React from 'react';

class Ladder extends React.Component {

  render() {
    var rank;
    const league = this.props.data.league[0];
    switch(league.tier){
      case "PROVISIONAL": 
        rank = "provisional";
        break;
      case "CHALLENGER":
        rank = "challenger";
        break;
      case "MASTER":
        rank = "master";
        break;
      default:
        rank = league.tier.toLowerCase() + "_" + league.rank.toLowerCase();
    }
    var wr = (league.wins / (league.losses + league.wins)).toFixed(2) * 100 ;
    return (
      <div className="media tile is-child box ladder">
        <figure className="image is-128x128">
          <img src={`../../../images/${rank}.png`} />
        </figure>
        <p className="title is-6">
          {league.tier} {league.rank} ({league.leaguePoints} LP)
        </p>
        <p>
          Win Rate:{wr}%
          <br />
          {league.wins}W {league.losses}L
          <br />
          {league.leagueName}
        </p>
          
      </div>

    );
  }
};
export default Ladder;