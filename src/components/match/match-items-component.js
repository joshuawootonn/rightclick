import React from "react";
import moment from "moment";
import MatchMenuComponent from './match-menu-component';
const MatchItemsComponent = props => {
  const player = props.match.mainPlayer;
  const { champion, version, item } = props.static;

 
  return (
      <div className="columns is-multiline is-12">
        Items
        <MatchMenuComponent setIndex={(i)=>{props.setIndex(i)}} />
      </div>
  );
};

export default MatchItemsComponent;
