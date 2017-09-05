import React from 'react';

import Intro from './intro'
import Loading from './loading';
import Content from './content';

class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentTab: 1
    };
    
  }
  render(){
    return(
      <div>
        {(this.props.wrapperState == 1) ? <Intro /> : null}
        {(this.props.wrapperState == 2) ? <Loading /> : null}
        {(this.props.wrapperState == 3) ? <Content /> : null}
      </div>
    );
  }
}

export default Wrapper;