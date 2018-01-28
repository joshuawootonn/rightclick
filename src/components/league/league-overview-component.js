import React from "react";

const LeagueOverviewComponent = props => {
  const player = props.player;
  const league = props.league;
  const wr = (league.wins.toFixed(2) /
    (league.wins + league.losses).toFixed(2) *
    100).toFixed(2);
  return (
    <div className="tile box is-12">
      <div className="columns is-vcentered">
        <div className="column  ">
          <img className="is-pulled-right" src={props.rankIconPath} />
        </div>
        <div className="column ">
          <h1>
            {player.name} - {league.tier}
          </h1>
          <h4>
            {league.wins}w / {league.losses}l
          </h4>
          <h4>
            {wr}wr {league.leaguePoints}lp
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LeagueOverviewComponent;
