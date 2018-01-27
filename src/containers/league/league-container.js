import { connect } from "react-redux";
import * as actions from "../../actions";
import React, { Component } from "react";

class LeagueContainer extends Component {
  getRankIcon = () => {
    console.log("nice",this.props.league)    
    return `https://raw.githubusercontent.com/jose56wonton/RightClick.GG/master/src/assets/images/`+
    `${this.props.league.tier.toLowerCase() + "_" + this.props.league.rank.toLowerCase()}.png`;
  }
  render() {
    if(this.props.league.loading)
      return <div>Loading</div>
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img src={this.getRankIcon()} className="img-responsive" />
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
        <div className="card-image">
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
