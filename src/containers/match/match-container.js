import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";
import Card from "material-ui/Card";
import MatchGraphContainer from "./match-graph-container";
import MatchScoreBoardComponent from "../../components/match/match-scoreboard-component";
import MatchOverviewComponent from "../../components/match/match-overview-component";
import MatchMenuComponent from "../../components/match/match-menu-component";

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
 
  handleChange = (event, value) => {
    this.setState({ state: value });
  };
  render() {
     
     this.props.match.mainPlayer =
     this.props.match.goodTeam.find(ele => {
       return ele.account.summonerName === this.props.own.player.name;
     }) ||
     this.props.match.badTeam.find(ele => {
       return ele.account.summonerName === this.props.own.player.name;
     });
     
    if(this.props.match.mainPlayer){
      return (
        <Card>
          <MatchOverviewComponent
            isExpanded={this.state.isExpanded}
            expand={this.expand}
            match={this.props.match}
            static={this.props.static}
          />
          {this.state.isExpanded && this.state.state === 0
            ? <MatchScoreBoardComponent
                rowClick={this.props.rowClick}
                match={this.props.match}
                static={this.props.static}
              />
            : null}
          {this.state.isExpanded && this.state.state === 1
            ? <MatchGraphContainer
                match={this.props.match}
                static={this.props.static}
              />
            : null}
          {this.state.isExpanded
            ? <MatchMenuComponent
                state={this.state.state}
                handleChange={this.handleChange}
              />
            : null}
        </Card>
              );
    }
    else{
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    static: state.static,
    own: ownProps
  };
};
export default connect(mapStateToProps, actions)(MatchContainer);
