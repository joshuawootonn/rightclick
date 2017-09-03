import React from 'react';

import SearchBar from './search_bar';

class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      searchVisible: false
    }
  }
  render(){
    return(
      <div className="hero-head">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item">
                <img src="images/bulma-type-white.png" alt="RIGHTCLICK.GG"/>
              </a>
            </div>
            <div className="nav-right nav-menu">
              <span className="nav-item">                
                {this.state.searchVisible ? <SearchBar /> : null }
              </span>
            </div>            
          </div>
        </header>
      </div>
    )
  }
}
export default Header;