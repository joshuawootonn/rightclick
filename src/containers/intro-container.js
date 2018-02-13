import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import SearchContainer from "./general/search-container";
import Typography from "material-ui/Typography";

class IntroContainer extends Component {
  render() {
    return (
      <div className="hero">
        <Typography variant="display4" gutterBottom>
          rightclick.gg
        </Typography>
        <SearchContainer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    static: state.static
  };
};
export default connect(mapStateToProps, actions)(IntroContainer);
