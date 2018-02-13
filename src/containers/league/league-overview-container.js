import React, { Component } from "react";
import LeagueOverviewComponent from "../../components/league/league-overview-component";
import Grid from "material-ui/Grid";
import LeaguePaperComponent from '../../components/league/league-paper-component';
import Typography from "material-ui/Typography";
import Paper from 'material-ui/Paper';
import leaguePaperComponent from "../../components/league/league-paper-component";
class LeagueOverviewContainer extends Component {
  render() {
    const wr = (this.props.league.wins.toFixed(2) /
      (this.props.league.wins + this.props.league.losses).toFixed(2) *
      100).toFixed(2);
    const classes = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} >
            <LeagueOverviewComponent
              rankIconPath={this.props.rankIconPath}
              player={this.props.player}
              league={this.props.league}
              wr={wr}
            />
          </Grid>
          <Grid item xs={12} >          
          <LeaguePaperComponent header={`${this.props.league.tier} ${this.props.league.rank}`} subheader={`${this.props.league.leaguePoints} LP`} />
        </Grid>
          <Grid item xs={12} >          
            <LeaguePaperComponent header={`Win Rate: ${wr}%`} subheader={`${this.props.league.wins} W / ${this.props.league.losses} L`}  />
          </Grid>
         
        </Grid>
      </div>
    );
  }
}

export default LeagueOverviewContainer;
