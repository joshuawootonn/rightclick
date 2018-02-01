import React, { Component } from "react";
import MatchGraphComponent from "../../components/match/match-graphs-component";
class MatchGraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphTypes: ["Gold", "Damage Dealt", "Damage Taken", "Healing"],
      currentGraph: 0
    };
  }
  generateDate = () => {
    let arr = [];
    console.log("graph", this.props);
    switch (this.state.currentGraph) {
      case 0:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            gold: element.stats.gold
          });
        });
      case 1:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            magic: element.stats.damageDealtMagic,
            physical: element.stats.damageDealtPhysical,
            true: element.stats.damageDealtTrue
          });
        });
        break;
      case 2:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            magic: element.stats.damageTakenMagic,
            physical: element.stats.damageTakenPhysical,
            true: element.stats.damageTakenTrue
          });
        });
        break;
      case 3:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            healing: element.stats.healing
          });
        });
        break;
      default:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            gold: element.stats.gold
          });
        });
        break;
    }
    console.log('this is the array',arr);
    return arr;
  };
  setIndex = i => {
    this.setState({ currentGraph: i });
  };
  render() {
    return (
      <MatchGraphComponent
        setIndex={i => {
          this.setIndex(i);
        }}
        data={this.generateDate()}
      />
    );
  }
}

export default MatchGraphContainer;
