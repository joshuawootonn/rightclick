import React from 'react';

class Loading extends React.Component{
  constructor(props){
    super(props);   
    
  }
  render(){
    return(
      <section className="hero is-light intro is-large">
        <div className="hero-body">
          <div className="container">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Loading;