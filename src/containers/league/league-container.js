import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";

class LeagueContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img src="img/osx-el-capitan.jpg" className="img-responsive" />
          </div>
          <div className="card-header">
            <div className="card-title h5">Microsoft</div>
            <div className="card-subtitle text-gray">Software and hardware</div>
          </div>
          <div className="card-body">
            Empower every person and every organization on the planet to achieve
            more.
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Do</button>
          </div>
        </div>
        {this.props.league.tier}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    league: state.league
  };
};
export default connect(mapStateToProps, actions)(LeagueContainer);
