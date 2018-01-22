import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import SearchComponent from '../components/search-component';
import {withRouter} from 'react-router';
import SearchContainer from './search-container'
class IntroContainer extends Component { 
  
  render() {    
    return (
      <div className="hero">
        <h1 className="">rightclick.gg</h1>
        <SearchContainer />       
      </div>
    );
  }
}

export default IntroContainer;
