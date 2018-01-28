import React, { Component } from "react";
import NavContainer from "./general/nav-container";
import TabContainer from "./general/tab-container";
import LeagueContainer from "./league/league-container";
import MatchContainer from './match/match-container';
import StatContainer from './stat/stat-container';
class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "League"
    };
  } 
  handleTabChange = tab => {
    this.setState({
      tab: tab
    });
    console.log(tab);
  
  };
  getIndexContent = () => {
    switch (this.state.tab) {
      case "League":
        return <LeagueContainer playerName={this.props.match.params.player} />;
      case "Matches":
        return <MatchContainer />
      case "Stats":
        return <StatContainer />
      default:
        return <LeagueContainer playerName={this.props.match.params.player} />;
    }
  };
  render = () => {
    return (
      <div className="container grid-lg">
        <NavContainer />
        <TabContainer
          current={this.state.tab}
          handleTabChange={this.handleTabChange}
        />
        {this.getIndexContent()}
      </div>
    );
  };
}

export default IndexContainer;
