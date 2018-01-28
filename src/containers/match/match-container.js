import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";
import MatchComponent from "../../components/match/match-component";
class MatchContainer extends Component {
  render = () => {            
      return (
        <MatchComponent />
      );
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
