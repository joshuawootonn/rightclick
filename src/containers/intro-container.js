import React from "react";
import SearchContainer from "./general/search-container";
import Typography from "material-ui/Typography";
import {connect} from 'react-redux'
import * as actions from '../actions';
import LoadingContainer from "./general/loading-container";
import Alert from '../components/general/alert';
class IntroContainer extends React.Component{
  handleClick = () => {
    this.props.toggleAlert();
  }
  render(){

    return (
      <div>
        <Alert handleClick={this.handleClick} render={this.props.alert} />
        <LoadingContainer />
        <div className="hero">
          <Typography variant="display4" gutterBottom>
            RightClick.gg
          </Typography>
          <SearchContainer index={0} />
        </div>
      </div>
    );
  }
  
};
const mapStateToProps = (state, ownProps) => {
  return {
    alert: state.alert
  };
};
export default connect(mapStateToProps,actions)(IntroContainer);
