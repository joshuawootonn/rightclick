import React from "react";
import MatchMenuComponent from './match-menu-component';
const MatchGraphsComponent = props => {
  return (
    <div className="columns is-multiline is-12 ">
      Graphs
      <MatchMenuComponent setIndex={(i)=>{props.setIndex(i)}} />
    </div>
  );
};

export default MatchGraphsComponent;
