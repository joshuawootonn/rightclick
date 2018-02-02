import React, { Component } from "react";
import MatchGraphComponent from "../../components/match/match-graphs-component";
import {
  Bar
 
} from "recharts";
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
    const goodTeam = this.props.match.goodTeam;
    const badTeam = this.props.match.badTeam;
    switch (this.state.currentGraph) {
      case 0:
        for (let i = 0; i < goodTeam.length; i++) {
          arr[i] = {
            name: goodTeam[i].account.summonerName,
            gold1: goodTeam[i].stats.gold
          };
          arr[i + goodTeam.length] = {
            name: badTeam[i].account.summonerName,
            gold2: badTeam[i].stats.gold
          };
        }
        return arr;
      case 1:
        for (let i = 0; i < goodTeam.length; i++) {
          arr[i] = {
            name: goodTeam[i].account.summonerName,
            magic1: goodTeam[i].stats.damageDealtMagic,
            physical1: goodTeam[i].stats.damageDealtPhysical,
            true1: goodTeam[i].stats.damageDealtTrue
          };
          arr[i + goodTeam.length] = {
            name: badTeam[i].account.summonerName,
            magic2: badTeam[i].stats.damageDealtMagic,
            physical2: badTeam[i].stats.damageDealtPhysical,
            true2: badTeam[i].stats.damageDealtTrue
          };
        }
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            magic: element.stats.damageDealtMagic,
            physical: element.stats.damageDealtPhysical,
            true: element.stats.damageDealtTrue
          });
        });
        return arr;
      case 2:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            magic: element.stats.damageTakenMagic,
            physical: element.stats.damageTakenPhysical,
            true: element.stats.damageTakenTrue
          });
        });
        return arr;
      case 3:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            healing: element.stats.healing
          });
        });
        return arr;
      default:
        this.props.match.goodTeam.forEach(element => {
          arr.push({
            name: element.account.summonerName,
            gold: element.stats.gold
          });
        });
        return arr;
    }
    console.log("this is the array 3", arr);
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
        type={this.state.currentGraph}
        data={this.generateDate()}
      >
        <Bar name="Gold" dataKey="gold1" stackId="a" fill="#A239CA" />
        <Bar name="Gold" dataKey="gold2" stackId="a" fill="#4717F6" />
      </MatchGraphComponent>
    );
  }
}

export default MatchGraphContainer;
