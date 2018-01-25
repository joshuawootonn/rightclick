import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import NavContainer from './nav-container';
class IndexContainer extends Component {
  
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