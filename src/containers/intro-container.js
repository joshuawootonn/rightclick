import React from "react";
import SearchContainer from "./general/search-container";
import Typography from "material-ui/Typography";
import { connect } from "react-redux";
import * as actions from "../actions";
import Alert from "../components/general/alert";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  fullHeight:{
    height: "100%"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },

});
class IntroContainer extends React.Component {
  handleClick = () => {
    this.props.toggleAlert();
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.fullHeight}>
          <Grid
            container
            className={classes.fullHeight}
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="display3" gutterBottom>
                RightClick.gg
              </Typography>
            </Grid>
            <Grid item>
              <SearchContainer index={0} />
            </Grid>
          </Grid>
          <Alert handleClick={this.handleClick} render={this.props.alert} />
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    alert: state.alert
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, actions)(IntroContainer)
);
