import React from 'react';

class Intro extends React.Component{
  constructor(props){
    super(props);   
    
  }
  render(){
    return(
      <div className="columns">
        <div className="column is-12">
          <h1>Right Click</h1>         
        </div>
      </div>
    );
  }
}

export default Intro;