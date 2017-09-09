import React from 'react';


class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      term:''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
        <div>            
          <nav className="navbar is-warning has-shadow">
            <a className="navbar-item">
              <img  alt="Right Click" />
            </a>
            <div className="nav-right nav-menu">
              <span className="nav-item">          
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
                    <a onClick={this.handleSubmit} className="button is-primary">
                      Search
                    </a>
                  </p>
                </div>
              </span>
            </div>       
          </nav>        
        </div>
    )
  }
   handleSubmit(event){
    event.preventDefault();
    this.props.onSearch(this.state.term);
    
    
  }
  handleChange(event){
    this.setState({term: event.target.value});    
  }
}
export default Header;