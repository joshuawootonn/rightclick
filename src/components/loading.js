import React from 'react';

class Loading extends React.Component{
  constructor(props){
    super(props);   
    
  }
  render(){
    return(
      <div className="columns">
        <div className="column is-12">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
}

export default Loading;