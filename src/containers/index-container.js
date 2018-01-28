import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import NavContainer from "./nav-container";
import TabContainer from './tab-container';
import LeagueContainer from './league/league-container';
class IndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: "League"
    }
  }  
  
  handleTabChange = tab =>{
    this.setState({
      tab: tab
    });
  }
  getIndexContent = () => {
    let content = null;
    switch(this.state.tab){
      case "League":        
          content = <LeagueContainer playerName={this.props.match.params.player}/>
    }
    return content;
  }
  render = () => {
    
    return (
        
        <div className="container grid-lg">
        <NavContainer />
        <TabContainer current={this.state.tab} handleTabChange={this.handleTabChange} />
        {this.getIndexContent()}
        </div>
       
     
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    player: state.player,
    league: state.league
  };
};
export default connect(mapStateToProps, actions)(IndexContainer);
