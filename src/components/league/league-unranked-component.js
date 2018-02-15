import React from "react";
import SearchContainer from "../../containers/general/search-container";
import Typography from "material-ui/Typography";
const LeagueUnrankedComponent = props => {

  return (
    
    <div className="hero">
        <Typography variant="display4" gutterBottom>
            This player is unplaced. Search Another?
        </Typography>
        <SearchContainer index={0}/>
      </div>
  );
};

export default LeagueUnrankedComponent;
