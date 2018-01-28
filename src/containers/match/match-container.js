import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";
import LeagueOverViewComponent from "../../components/league/league-overview-component";
import LeagueUnrankedComponent from "../../components/league/league-unranked-component";
import LeagueTableComponent from "../../components/league/league-table-component";
class MatchContainer extends Component {
  componentDidMount = () => {  
    this.pullMatchData();
  };  
  componentWillReceiveProps(nextProps) {
    if (nextProps.own.playerName !== this.props.own.playerName) {
      this.pullMatchData();
    }
  }
  pullMatchData = () => {
    if (
      this.props.match.status === status.INIT ||
      this.props.match.status === status.SUCCESS
    ) {
      this.props.getMatch(this.props.playerName);
    }
    if (this.props.static.status === status.INIT) {
      this.props.getStatic();
    }
  }
  
  render = () => {
    // If Loading
    if (this.props.match.status === status.LOADING || this.props.player.status === status.LOADING)
      return <p>loading</p>;
    // If Unranked
    // if (this.props.match.status === status.SUCCESS && !this.props.match)
    //   return <LeagueUnrankedComponent />;
    // If ranked
    if (this.props.match.status === status.SUCCESS)
      return (
        <div className="tile is-vertical is-ancestor">
          Matches bitch
        </div>
      );
    return null;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    match: state.match,
    player: state.player,
    static: state.static,
    own: ownProps
  };
};
export default connect(mapStateToProps, actions)(MatchContainer);