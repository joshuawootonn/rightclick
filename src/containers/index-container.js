import React, { Component } from "react";
import NavContainer from "./general/nav-container";
import TabContainer from "./general/tab-container";
import LeagueContainer from "./league/league-container";
import MatchesContainer from "./match/matches-container";
import StatContainer from "./stat/stat-container";
import LoadingContainer from "./general/loading-container";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  }
});
class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
  }
  handleTabChange = (event, tab) => {
    this.setState({
      tab: tab
    });
  };
  getIndexContent = () => {
    switch (this.state.tab) {
      case 0:
        return <LeagueContainer playerName={this.props.match.params.player} />;
      case 1:
        return <MatchesContainer playerName={this.props.match.params.player} />;
      case "Stats":
        return <StatContainer playerName={this.props.match.params.player} />;
      default:
        return <LeagueContainer playerName={this.props.match.params.player} />;
    }
  };
  render = () => {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} >
          <NavContainer />
          <LoadingContainer />
          <TabContainer
            current={this.state.tab}
            handleTabChange={this.handleTabChange}
          />
          {this.getIndexContent()}
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(IndexContainer);
