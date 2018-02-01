import React from "react";

const MatchKdaComponent = props => {
  return (
    <div className="tile box is-12  ">
      <div className="columns">
        <div className="column">
          <figure className="image is-96 champion-img">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/${props.static
                .version[0]}/img/champion/${"Annie"}.png`}
            />
          </figure>
        </div>
        <div className="column is-9">kda</div>
        <div className="column">
          <button onClick={props.expand} className="button">
            kda
          </button>
        </div>
      </div>

      <div className="columns">
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

export default MatchKdaComponent;
