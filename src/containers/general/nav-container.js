import React, { Component } from 'react';
import NavComponent from '../../components/general/nav-component';
import { withRouter } from "react-router";

class NavContainer extends Component {
  handleClick = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <NavComponent handleClick={this.handleClick} />    
    );
  }
}

export default withRouter(NavContainer);