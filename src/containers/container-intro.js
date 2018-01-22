import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Search from '../components/component-search';
class Intro extends Component {
  handleSearch = event => {
    
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

export default reduxForm({
  form: "PlayerSearch"
})(Intro);
