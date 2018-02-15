import React, { Component } from "react";
import NavContainer from "./general/nav-container";
import TabContainer from "./general/tab-container";
import LeagueContainer from "./league/league-container";
import MatchesContainer from "./match/matches-container";
import StatContainer from "./stat/stat-container";
class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    };
  }
  handleTabChange = (event,tab) => {
    
    this.setState({
      tab: tab
    });
  };
  getIndexContent = () => {
    switch (this.state.tab) {
      case 0:
        return <LeagueContainer playerName={this.props.match.params.player} />;
      case 1:
        return <MatchesContainer playerName={this.props.match.params.player} />;
      case "Stats":
        return <StatContainer playerName={this.props.match.params.player} />;
      default:
        return <LeagueContainer playerName={this.props.match.params.player} />;
    }
  };
  render = () => {
    return <div>
        <NavContainer />
        <TabContainer current={this.state.tab} handleTabChange={this.handleTabChange} />
        <div className="container grid-lg">
          {this.getIndexContent()}
        </div>
      </div>;
  };
}

export default IndexContainer;
