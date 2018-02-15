import React from "react";
import SearchContainer from "./general/search-container";
import Typography from "material-ui/Typography";

import LoadingContainer from "./general/loading-container";
const IntroContainer = props => {
  return (
    <div>
      <LoadingContainer />
      <div className="hero">
        <Typography variant="display4" gutterBottom>
          RightClick.gg
        </Typography>
        <SearchContainer index={0} />
      </div>
    </div>
  );
};

export default IntroContainer;
