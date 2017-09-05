import React from 'react';

class Content extends React.Component{
  constructor(props){
    super(props);   
    
  }
  render(){
    return(
      <div className="columns">
        
        <div className="column is-2">
          <aside className="menu">
            <ul className="menu-list">
              <li ><a className="is-active">Summary</a></li>
              <li><a>Matches</a></li>
              <li><a>Highlights</a></li>
              <li><a>Current Game</a></li>
            </ul>
          </aside>
        </div>





        <div className="column is 8">
        </div>

      </div>
    );
  }
}

export default Content;