import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";
import LeagueOverViewComponent from "../../components/league/league-overview-component";
class LeagueContainer extends Component {
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
    // If unranked

    // If ranked
    if (this.props.league.status === status.SUCCESS)
      return <LeagueOverViewComponent rankIconPath={this.getRankIcon()} />;
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    league: state.league
  };
};
export default connect(mapStateToProps, actions)(LeagueContainer);
