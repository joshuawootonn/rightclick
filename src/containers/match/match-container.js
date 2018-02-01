import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";

import MatchDataComponent from '../../components/match/match-data-component'
import MatchKdaComponent from '../../components/match/match-kda-component'
import MatchStatsComponent from '../../components/match/match-stats-component'
import MatchOverviewComponent from '../../components/match/match-overview-component'


class MatchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      state: 0
    };
  }
  expand = () => {
    const currentState = this.state.isExpanded;
    this.setState({ isExpanded: !currentState });
  };
  setIndex = i => {
    if (i > -1 && i < 4) this.setState({ state: i });
  };

  renderContent = (match) => {    
    return(
    <div className="tile box is-12">
      <MatchOverviewComponent expand={this.expand} match={match} static={this.props.static}/>
    </div>)
  };

  render() {
    this.props.match.mainPlayer = this.props.match.goodTeam.find(ele => {
      return ele.account.summonerName === this.props.player.name;
    }) || this.props.match.badTeam.find(ele => {
      return ele.account.summonerName === this.props.player.name;
    });
    return (
      <div className="container grid-lg">
        <div className="tile is-vertical is-ancestor">
          {this.renderContent(this.props.match)}
        </div>
      </div>
    );
  }
}             

const mapStateToProps = (state, ownProps) => {
  return {    
    player: state.player,
    static: state.static,
    own: ownProps
  };
};
export default connect(mapStateToProps, actions)(MatchContainer);
