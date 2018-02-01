import React from "react";
import moment from "moment";
const MatchStatsComponent = props => {
  const player = props.data.mainPlayer;
  const { champion, version, item } = props.static;

 
  return (
    <div className="tile box is-6 ">
      <div className="columns is-multiline is-12">
        <div className="column is-half">
          <figure className="image is-96x96 champion-img">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/${version[0]}/img/champion/${champion
                .data[player.championId].key}.png`}
            />
          </figure>
          <figcaption>
            {champion.data[player.championId].key}
          </figcaption>
          <div>
            <h1 className="title is-5">
            </h1>
            <h2 className="subtitle is-5">
              {(props.data.general.gameDuration / 60).toFixed(0)}m{" "}
              {(props.data.general.gameDuration % 3600 % 60).toFixed(0)}s
            </h2>
          </div>
        </div>
        <div className="column has-text-centered is-half">
          <div className="is-pulled-right">
            <button onClick={props.expand} className="button">
              -
            </button>
          </div>
          <h1 className="title is-5">
            {player.stats.win ? "Win" : "Loss"}
          </h1>
          <h1 className="title is-5">
            {player.stats.kills}/{player.stats.deaths}/{player.stats.assists}
          </h1>
          <h2 className="subtitle is-5">
            KDA:{player.kda}
          </h2>
          <h1 className="title is-5">
            CS: {player.stats.totalMinionsKilled}
          </h1>
          <h2 className="subtitle is-5">
            Level: {player.stats.champLevel}
          </h2>          
        </div>
        <div className="column">
          <button
            onClick={() => {
              props.setIndex(0);
            }}
            className="button"
          >
            stats
          </button>
          <button
            onClick={() => {
              props.setIndex(1);
            }}
            className="button"
          >
            kda
          </button>
          <button
            onClick={() => {
              props.setIndex(2);
            }}
            className="button"
          >
            data
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchStatsComponent;
