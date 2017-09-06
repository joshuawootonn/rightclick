import React from 'react';
import Tab from './tab';


class Tabs extends React.Component{
 
  render() {
    return (
      <div className="navbar has-shadow">
        <div className="container is-fluid">
          <div className="navbar-brand">
          {this.props.tabData.map(function(tab){
            return (
              <Tab data={tab}
              isActive={this.props.activeTab == tab} 
              handleClick={this.props.changeTab.bind(this,tab)} 
              />
            );
          }.bind(this))}      
          </div>
        </div>
      </div>
    );
  }
};

export default Tabs;