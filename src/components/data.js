import React from 'react';

import Tabs from './tabs';
import Content from './content';

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
    return(
      <div>
        
        <Tabs tabData={tabData} activeTab={this.state.activeTab} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} />        
      </div>
        
    );
  }
}

export default Data;