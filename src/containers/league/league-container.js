import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import LeagueOverviewContainer from "./league-overview-container";
import LeagueUnrankedComponent from "../../components/league/league-unranked-component";
import LeagueTableComponent from "../../components/league/league-table-component";


const styles = theme => ({
  
  container: {flexGrow: 1,
    marginTop: 30,
    margin: "0 auto",
    width: "100%"
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class LeagueContainer extends Component {
  componentDidMount = () => {
    this.pullLeagueData();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.own.playerName !== this.props.own.playerName) {
      this.pullLeagueData(nextProps.own.playerName);
    }
  }
  pullLeagueData = (name=this.props.playerName) => {
    if (
      this.props.league.status === status.INIT ||
      this.props.league.status === status.SUCCESS
    ) {
      this.props.getLeague(name);
    }
    if (this.props.static.status === status.INIT) {
      this.props.getStatic();
    }
  };
  getRankIcon = () => {
    return (
      `https://raw.githubusercontent.com/jose56wonton/RightClick.GG/master/src/assets/images/` +
      `${this.props.league.tier.toLowerCase() +
        "_" +
        this.props.league.rank.toLowerCase()}.png`
    );
  };
  rowClick = player => {
    this.props.history.push(`/summoner/${player}`);
  };
  render = () => {  
    const { classes } = this.props;
    // if unranked
    if (this.props.league.status === status.ERROR && !this.props.league.tier)
      return <LeagueUnrankedComponent />;   
    // if ranked
    if (this.props.league.status === status.SUCCESS)
      return (
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} >
              <LeagueOverviewContainer
                player={this.props.player}
                league={this.props.league}
                rankIconPath={this.getRankIcon()}
              />
            </Grid>
            <Grid item xs={12} >
              <LeagueTableComponent
                rowClick={this.rowClick}
                league={this.props.league}
              />
            </Grid>
          </Grid>
       
      );
    return null;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    league: state.league,
    player: state.player,
    static: state.static,
    own: ownProps
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, actions)(withRouter(LeagueContainer))
);
//
