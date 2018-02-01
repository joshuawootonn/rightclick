import React from "react";
import MatchMenuComponent from './match-menu-component';
const MatchScoreBoardComponent = props => {
  return (
    <div className="columns is-multiline is-12 ">
      Scoreboard
      <MatchMenuComponent setIndex={(i)=>{props.setIndex(i)}} />
    </div>
  );
};

export default MatchScoreBoardComponent;
