import React, { Component } from "react";
import NavContainer from "./nav-container";
import TabContainer from "./tab-container";
import LeagueContainer from "./league/league-container";
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
  };
  getIndexContent = () => {
    switch (this.state.tab) {
      case "League":
        return <LeagueContainer playerName={this.props.match.params.player} />;
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
        <LeagueContainer playerName={this.props.match.params.player} />
      </div>
    );
  };
}

export default IndexContainer;
