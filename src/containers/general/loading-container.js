import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../components/general/loading";
import * as status from "../../reducers/status";
class LoadingContainer extends Component {
  render() {
    if (
      this.props.match.status === status.LOADING ||
      this.props.player.status === status.LOADING ||
      this.props.league.status === status.LOADING ||
      this.props.static.status === status.LOADING
    )
      return <Loading />;
    else
      return <div className="loading-height"></div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    match: state.match,
    player: state.player,
    league: state.league,
    static: state.static,
    own: ownProps
  };
};
export default connect(mapStateToProps)(LoadingContainer);
