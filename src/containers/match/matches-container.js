import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";
import MatchContainer from './match-container';
import MatchComponent from "../../components/match/match-component";
class MatchesContainer extends Component {
  componentDidMount = () => {
    this.pullMatchData();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.own.playerName !== this.props.own.playerName) {
      this.pullMatchData();
    }
  }
  componentWillUpdate = (nextProps, nextState) => {
    if (this.props.match.status != nextProps.match.status) {
      this.forceUpdate();
    }
  }
  pullMatchData = () => {
    if (
      this.props.match.status === status.INIT ||
      this.props.match.status === status.SUCCESS
    ) {
      this.props.getMatch(this.props.playerName);
    }   
  };
  generateMatchTiles = () => {
    return this.props.match.matches.map((m, i) => {
      if (m.gameMode === "CLASSIC"){        
        return <MatchContainer match={m}  />;
      }
      else 
        return null;
    });
  };
  render = () => {
    // If Loading
    if (
      this.props.match.status === status.LOADING ||
      this.props.player.status === status.LOADING
    )
      return <p>loading</p>;
    // If Unranked
    // if (this.props.match.status === status.SUCCESS && !this.props.match)
    //   return <LeagueUnrankedComponent />;
    // If ranked    
    if (this.props.match.status === status.SUCCESS) { 
      // return (
      //   <MatchComponent />
      // )
      return (
        
        <div className="tile is-vertical is-ancestor">
          {this.generateMatchTiles()}  
        </div>
      );
    }
    return null;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    match: state.match,
    player: state.player,
    own: ownProps
  };
};
export default connect(mapStateToProps, actions)(MatchesContainer);
