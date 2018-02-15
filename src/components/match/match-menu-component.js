import React from "react";
import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import ViewListIcon from "material-ui-icons/ViewList";
import EqualizerIcon from "material-ui-icons/Equalizer";
const styles = {
  root: {
    width: "100%"
  }
};
const MatchMenuComponent = props => {
  const { classes } = props;
  return (
    <BottomNavigation
      value={props.state}
      onChange={props.handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Score" icon={<ViewListIcon />} />
      <BottomNavigationAction label="Graphs" icon={<EqualizerIcon />} />
    </BottomNavigation>
  );
};

export default withStyles(styles)(MatchMenuComponent);
