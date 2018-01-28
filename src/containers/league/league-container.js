import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";
import LeagueOverViewComponent from "../../components/league/league-overview-component";
import LeagueUnrankedComponent from "../../components/league/league-unranked-component";
class LeagueContainer extends Component {

  componentDidMount = () =>{
    console.log(this.props.playerName)
    if(this.props.league.status === status.INIT){
      this.props.getLeague(this.props.playerName);    
    }
    if(this.props.static.status === status.INIT){
      this.props.getStatic();
    }
  }
  getRankIcon = () => {
    return (
      `https://raw.githubusercontent.com/jose56wonton/RightClick.GG/master/src/assets/images/` +
      `${this.props.league.tier.toLowerCase() +
        "_" +
        this.props.league.rank.toLowerCase()}.png`
    );
  };

  render() {
    // If Loading
    if (this.props.league.status === status.LOADING)
      return <div className="loading loading-lg" />;
    // If Unranked
    if (this.props.league.status === status.SUCCESS && !this.props.league.tier)
      return <LeagueUnrankedComponent /> ;    
    // If ranked
    if (this.props.league.status === status.SUCCESS)
      return <LeagueOverViewComponent player={this.props.player} league={this.props.league} rankIconPath={this.getRankIcon()} />;
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    league: state.league,
    player: state.player,
    static: state.static
  };
};
export default connect(mapStateToProps, actions)(LeagueContainer);
