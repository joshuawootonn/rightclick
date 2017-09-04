import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './components/search_bar';
import Header from './components/header';
import Wrapper from './components/wrapper';

import {fetchPlayer} from './actions';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      player: {}
    }    
  }
  
  
  render(){
    const playerSearch = this.playerSearch;
    return(
      <div>        
        <section className="hero is-fullheight">
          <Header />        
          <Wrapper />          
        </section>
      </div>
    ) 
  }
}
function mapStateToProps(state){
  return {player: state.player};
}

export default connect(mapStateToProps,{fetchPlayer})(App);