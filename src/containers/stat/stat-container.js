import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import * as status from "../../reducers/status";

class StatContainer extends Component {
  // componentDidMount = () => {  
  //   this.pullStatData();
  // };  
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.own.playerName !== this.props.own.playerName) {
  //     this.pullStatData();
  //   }
  // }
  // pullStatData = () => {
  //   if (
  //     this.props.stat.status === status.INIT ||
  //     this.props.stat.status === status.SUCCESS
  //   ) {
  //     this.props.getStat(this.props.playerName);
  //   }
  //   if (this.props.static.status === status.INIT) {
  //     this.props.getStatic();
  //   }
  // }
  
  render = () => {
    // If Loading
    // if (this.props.stat.status === status.LOADING || this.props.player.status === status.LOADING)
    //   return <p>loading</p>;
    // If Unranked
    // if (this.props.match.status === status.SUCCESS && !this.props.match)
    //   return <LeagueUnrankedComponent />;
    // If ranked
    // if (this.props.stat.status === status.SUCCESS)
      return (
        <div className="tile is-vertical is-ancestor">
          Stats bitch
        </div>
      );
    return null;
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stat: state.stat,
    player: state.player,
    static: state.static,
    own: ownProps
  };
};
export default connect(mapStateToProps, actions)(StatContainer);