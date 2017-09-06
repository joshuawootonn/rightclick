import React from 'react';

import Tabs from './wrapper/tabs';
import Content from './wrapper/content';

var tabData = [
  { name: 'Summary', isActive: true },
  { name: 'Matches', isActive: false },
  { name: 'Champions', isActive: false },
  { name: 'Highlights', isActive: false },
  { name: 'Current Game', isActive: false }
];


class Data extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      activeTab: tabData[0]      
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(tab){
    this.setState({activeTab: tab});
  }
  render(){
    const data = {player: this.props.data.player,
                  recent_matches: this.props.data.recent_matches}
    return(
      <div>
        
        <Tabs tabData={tabData} activeTab={this.state.activeTab} changeTab={this.handleClick} />
        <Content data={data} activeTab={this.state.activeTab} />        
      </div>
        
    );
  }
}

export default Data;