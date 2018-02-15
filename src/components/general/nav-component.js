import React from "react";
import SearchContainer from "../../containers/general/search-container";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const NavComponent = props => {
  const { classes, handleClick } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="title"
            style={{ cursor: "pointer" }}
            onClick={() => handleClick()}
            color="inherit"
            className={classes.flex}
          >
            RightClick.gg
          </Typography>
          <SearchContainer />
        </Toolbar>
      </AppBar>
      
    </div>
  );
};

export default withStyles(styles)(NavComponent);

// <div className="navbar-end">
//         <div className="navbar-item">
//           <div className="field is-grouped">
//             <SearchContainer />
//           </div>
//         </div>
//       </div>
