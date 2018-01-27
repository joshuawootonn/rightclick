import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import NavContainer from "./nav-container";
import TabContainer from './tab-container';
import * as api from "../api";
class IndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: "League"
    }
  }  
  componentDidMount = () => {
    // If state not present from a past search get it.
    const playerName = this.props.match.params.player;
    if (!this.props.player.loading) {
      this.props.getStatic();
      this.props.getLeague(playerName);
      this.props.getMatch(playerName);
    }
  }
  handleTabChange = tab =>{
    this.setState({
      tab: tab
    });
  }
  render = () => {
    return (
      <div>
        <NavContainer />
        <TabContainer current={this.state.tab} handleTabChange={this.handleTabChange} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    player: state.player
  };
};
export default connect(mapStateToProps, actions)(IndexContainer);
