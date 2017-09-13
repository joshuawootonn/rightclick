import React from 'react';
import {Switch,Route, withRouter} from 'react-router-dom';
import Header from './components/header';


import Intro from './components/intro'
import Loading from './components/loading';
import Wrapper from './components/wrapper';
import NotFound from './components/notfound';

import axios from 'axios';

const API_KEY = 'RGAPI-1ace6f9a-2ab1-4b50-b558-ca468d6bfd39';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ''
    };
    this.playerSearch = this.playerSearch.bind(this);
    
  }
  
  
  playerSearch(term){    
    this.props.history.push(`/summoner/${term}`)    
  }

  render(){
    const playerSearch = this.playerSearch;
    
    
    return(
      <div className="container wrapper">     
           
          <Header onSearch={playerSearch}/> 
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/summoner/:name' component={Wrapper} />
            <Route component={NotFound} />
          </Switch>
          
      </div>
    ) 
  }
}
export default withRouter(App);




// <Header onSearch={playerSearch} />
//   <Switch>
//     <Route exact path='/' component={Intro} />
//     <Route component={NotFound} />
//   </Switch>



// {(this.state.currentPage == 1) ? <Intro /> : null }
// { (this.state.currentPage == 2) ? <Loading /> : null }
// { (this.state.currentPage == 3) ? <Wrapper data={data} /> : null }
// { (this.state.currentPage == 4) ? <NotFound /> : null }