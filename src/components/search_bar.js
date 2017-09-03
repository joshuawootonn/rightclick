import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div className="field has-addons has-addons-centered">
        <form className="control" onSubmit={this.handleSubmit}>         
          <input type="text" 
            className="input"
            value={this.state.term}
            placeholder="Summoner"
            onChange={this.handleChange}
          />  
        </form> 
        <p className="control">
          <a className="button is-primary">
            Search
          </a>
        </p>
      </div>
    );
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }
  handleChange(event){
    this.setState({term: event.target.value});
    
  }
}

export default SearchBar;