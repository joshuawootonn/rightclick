import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import * as actions from '../actions';
import SearchComponent from '../components/search-component';
import {withRouter} from 'react-router';
import SearchContainer from './search-container'
class IntroContainer extends Component { 
  componentDidMount(){
    
      
    
  }
  render() {    
    return (
      <div className="hero">
        <h1 className="">rightclick.gg</h1>
        <SearchContainer />       
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {    
    static: state.static
  }
}
export default connect(mapStateToProps,actions)(IntroContainer);
