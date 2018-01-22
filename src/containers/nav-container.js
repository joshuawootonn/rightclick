import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import NavComponent from '../components/nav-component';
class NavContainer extends Component {
  handleSearch = event => {
    this.props.history.push(`/${event.search}`);
  };
  render() {
    return (
      <NavComponent />    
    );
  }
}

export default NavContainer;