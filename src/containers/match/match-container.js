import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";

import MatchGraphsComponent from '../../components/match/match-graphs-component'
import MatchScoreBoardComponent from '../../components/match/match-scoreboard-component'
import MatchItemsComponent from '../../components/match/match-items-component'
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


  render() {
    this.props.match.mainPlayer = this.props.match.goodTeam.find(ele => {
      return ele.account.summonerName === this.props.player.name;
    }) || this.props.match.badTeam.find(ele => {
      return ele.account.summonerName === this.props.player.name;
    });
    return (     
      <div className="tile is-child box is-12">
      <MatchOverviewComponent expand={this.expand} match={this.props.match} static={this.props.static}/>
      {this.state.isExpanded && this.state.state === 0 ? <MatchItemsComponent setIndex={this.setIndex} match={this.props.match} static={this.props.static}/> : null}
      {this.state.isExpanded && this.state.state === 1 ? <MatchScoreBoardComponent setIndex={this.setIndex} match={this.props.match} static={this.props.static}/> : null}
      {this.state.isExpanded && this.state.state === 2 ? <MatchGraphsComponent setIndex={this.setIndex} match={this.props.match} static={this.props.static}/> : null}
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
