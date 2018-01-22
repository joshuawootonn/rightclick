import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class Intro extends Component {
  handleSearch = event => {
    console.log("handle", event);
  };
  renderSearchField = field => {
    return (
      <div className="input-group">
        <input className="form-input" type="text" placeholder="search" {...field.input}/>
        <button type="submit" className="btn btn-primary input-group-btn">Search</button>
      </div>
    );
  };
  render() {
    // Handle Submit is given to us by redux form. 
    //Once it is called it called the callback we are sending it
    const {handleSubmit} = this.props;
    return (
      <div className="hero">
        <h1 className="">rightclick.gg</h1>
        <form onSubmit={handleSubmit(this.handleSearch)}>
          <Field name="search" component={this.renderSearchField} />  
        </form>           
      </div>
    );
  }
}

export default reduxForm({
  form: "PlayerSearch"
})(Intro);
