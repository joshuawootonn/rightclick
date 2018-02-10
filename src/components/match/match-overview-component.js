import React from "react";

const MatchOverviewComponent = props => {
 
  const player = props.match.mainPlayer;
  const { champion, version } = props.static;

  return (
    <div className="columns has-text-centered vertical-center ">
      <div className="column is-narrow">
        <figure className="image is-96x96 champion-img">
          <img
            alt="Current player's champion"
            src={`http://ddragon.leagueoflegends.com/cdn/${version[0]}/img/champion/${champion
              .data[player.championId].key}.png`}
          />
        </figure>
        <figcaption>
          {champion.data[player.championId].key}
        </figcaption>
      </div>
      <div className="column">
        <div>
          <h1 className="title">
            {player.stats.win ? "Win" : "Loss"}
          </h1>
        </div>
      </div>
      <div className="column">
        <div>
          <h1 className="title">
            {props.match.general.gameDuration}
          </h1>
          <h2 className="subtitle">
            {props.match.general.gameCreation}
          </h2>
        </div>
      </div>
      <div className="column">
        <h1 className="title">
          {player.stats.kills}/{player.stats.deaths}/{player.stats.assists}
        </h1>
        <h2 className="subtitle">
          KDA:{player.stats.kda}
        </h2>
      </div>
      <div className="column">
        <h1 className="title">
          CS: {player.stats.cs}
        </h1>
        <h2 className="subtitle">
          Level: {player.stats.level}
        </h2>
      </div>
      <div className="column ">
        <button onClick={props.expand} className="button is-pulled-right">
          +
        </button>
      </div>
    </div>
  );
};

export default MatchOverviewComponent;
