import React from 'react';

import Matches from './tiles/matches';

class Content extends React.Component{

  


  render() {
    const data={player: this.props.data.player,
                recent_matches: this.props.data.recent_matches,
                versions: this.props.data.versions,
                champions: this.props.data.champions,
                items: this.props.data.items}
    return (

      <div>
        {this.props.activeTab.name == 'Summary' ? 


        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
          </div>
        </div>  


        :null} 
        {this.props.activeTab.name == 'Matches' ? 
        <Matches data={data}/>   
        :null} 
        {this.props.activeTab.name == 'Champions' ? 


        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
          </div>
        </div>


        :null}
        {this.props.activeTab.name == 'Highlights' ? 


        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
          </div>
        </div>


        :null}
        {this.props.activeTab.name == 'Current Game' ? 


        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
          </div>
        </div>


        :null} 
        
        </div>
    );
  }
};

export default Content;