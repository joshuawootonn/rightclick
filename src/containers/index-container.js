import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import NavContainer from './nav-container';
import * as api from "../api";
class IndexContainer extends Component {
  componentDidMount(){
    console.log(this.props.match.params.player);
    const playerName = this.props.match.params.player;
    const playerRequest = api.fetchPlayer(playerName);
    // If state not present from a past search get it.
    if(this.props.player){
      this.props.getStatic();
      this.props.getLeague();
      this.props.getMatch();
    }
  }
  render() {
    return (
      <NavContainer />
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