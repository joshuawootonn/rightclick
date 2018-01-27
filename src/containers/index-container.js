import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import NavContainer from './nav-container';
import * as api from "../api";
class IndexContainer extends Component {
  componentDidMount(){
    // If state not present from a past search get it.
    console.log(this.props);
    const playerName = this.props.match.params.player;    
    if(this.props.player){
      this.props.getStatic();
      this.props.getLeague(playerName);
      this.props.getMatch(playerName);
    }
  }
  render() {
    return (
      <div>
      <NavContainer />
      {(this.player) ? this.player.name : null}
      </div>
      
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    player: state.player
  }
}
export default connect(mapStateToProps,actions)(IndexContainer);