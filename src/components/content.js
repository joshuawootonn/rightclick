import React from 'react';

class Content extends React.Component{
  render() {
    return (

      <div className="tile is-ancestor">
        {this.props.activeTab.name == 'Summary' ? 

        <div className="tile is-vertical is-12">
        </div>
          
        :null} 
        {this.props.activeTab.name == 'Matches' ? 

          <div className="tile is-vertical is-12">
            <div className="tile">

              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title">Vertical...</p>
                  <p className="subtitle">Top tile</p>
                </article>             
              </div>           
            </div>        
          </div>      

        :null} 
        {this.props.activeTab.name == 'Champions' ? 
        
        <div className="tile is-vertical is-12">
        </div>

        :null}
        {this.props.activeTab.name == 'Highlights' ? 
        
        <div className="tile is-vertical is-12">
        </div>

        :null}
        {this.props.activeTab.name == 'Current Game' ? 
        
        <div className="tile is-vertical is-12">
        </div>
        
        :null} 
        
      </div>
    );
  }
};

export default Content;