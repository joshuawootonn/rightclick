import React from "react";

const LeagueOverviewComponent = props => {
  const player = props.player;
  const league = props.league;
  const wr = (league.wins.toFixed(2) /
    (league.wins + league.losses).toFixed(2) *
    100).toFixed(2);
  return (
    <div className="tile box is-12 secondary stripper">
      <div className="parent">
        <div className="left">
          <h1 className="title ">
            {player.name}
          </h1>
          <h4  className="title is-5">
            {wr}WR 
          </h4>
        </div>
        <div className="middle">
          <img
            alt="rank icon"
            className="is-pulled-right rank-icon"
            src={props.rankIconPath}
          />
          <h1  className="title is-5">
            {league.leaguePoints}LP
          </h1>
        </div>
        <div className="right">
          <h1  className="title is-5">
            {league.tier+" "+league.rank} 
          </h1>
          <h4  className="title">
            {league.wins}W / {league.losses}L
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LeagueOverviewComponent;
