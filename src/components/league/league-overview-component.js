import React from "react";

const LeagueOverviewComponent = props => {
  return (
    <div className="columns">
      <div className="column col-3">
        <img src={props.rankIconPath} />
      </div>
      <div className="column col-9">col-6</div>
    </div>
  );
};

export default LeagueOverviewComponent;
