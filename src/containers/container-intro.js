import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Search from '../components/component-search';
import {withRouter} from 'react-router';
class Intro extends Component {
  handleSearch = event => {
    this.props.history.push(`/${event.search}`);
  };
  
  render() {
    // Handle Submit is given to us by redux form. 
    //Once it is called it called the callback we are sending it
    const {handleSubmit} = this.props;
    return (
      <div className="hero">
        <h1 className="">rightclick.gg</h1>
        <form onSubmit={handleSubmit(this.handleSearch)}>
          <Field name="search" component={Search} />  
        </form>           
      </div>
    );
  }
}

export default withRouter(reduxForm({
  form: "PlayerSearch"
})(Intro));
