import React from 'react';

import SearchBar from './search_bar';

class Wrapper extends React.Component{
  constructor(props){
    super(props);

    this.state = {}
  }
  render(){
    return(
      <div className="hero-body">
        <div className="container has-text-centered">              
          <SearchBar />              
        </div>
      </div>
    );
  }
}

export default Wrapper;