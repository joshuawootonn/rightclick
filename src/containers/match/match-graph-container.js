import React, { Component } from "react";
import MatchGraphComponent from "../../components/match/match-graphs-component";
import { Bar } from "recharts";
class MatchGraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphTypes: ["Gold", "Damage Dealt", "Damage Taken", "Healing"],
      currentGraph: "Gold"
    };
  }
  generateData = () => {
    let arr = [];
    const goodTeam = this.props.match.goodTeam;
    const badTeam = this.props.match.badTeam;
    for (let i = 0; i < goodTeam.length; i++) {
      arr[i] = {
        name: goodTeam[i].account.summonerName,
        gold1: goodTeam[i].stats.gold,
        magicDealt1: goodTeam[i].stats.damageDealtMagic,
        physicalDealt1: goodTeam[i].stats.damageDealtPhysical,
        trueDealt1: goodTeam[i].stats.damageDealtTrue,
        magicTaken1: goodTeam[i].stats.damageTakenMagic,
        physicalTaken1: goodTeam[i].stats.damageTakenPhysical,
        trueTaken1: goodTeam[i].stats.damageTakenTrue,
        heal1: goodTeam[i].stats.healing
      };
      arr[i + goodTeam.length] = {
        name: badTeam[i].account.summonerName,
        gold2: badTeam[i].stats.gold,
        magicDealt2: badTeam[i].stats.damageDealtMagic,
        physicalDealt2: badTeam[i].stats.damageDealtPhysical,
        trueDealt2: badTeam[i].stats.damageDealtTrue,
        magicTaken2: badTeam[i].stats.damageTakenMagic,
        physicalTaken2: badTeam[i].stats.damageTakenPhysical,
        trueTaken2: badTeam[i].stats.damageTakenTrue,
        heal2: badTeam[i].stats.healing
      };
    }
    return arr;    
  };
  changeGraph = event => {
    console.log(event);
    this.setState({ currentGraph: event.target.value });
  };
  generateBars = () => {
    switch (this.state.currentGraph) {
      case "Gold":
        return [
          { name: "Gold", dataKey: "gold1", stackId: "a", fill: "#A239CA" },
          { name: "Gold", dataKey: "gold2", stackId: "a", fill: "#4717F6" }
        ];
      case "Damage Dealt":
        return [
          { name: "Magic", dataKey: "magic1Dealt", stackId: "a", fill: "#A239CA" },
          {
            name: "Physical",
            dataKey: "physicalDealt1",
            stackId: "a",
            fill: "#4717F6"
          },
          { name: "True", dataKey: "true1Dealt", stackId: "a", fill: "#A239CA" },
          { name: "Magic", dataKey: "magicDealt2", stackId: "a", fill: "#4717F6" },
          {
            name: "Physical",
            dataKey: "physicalDealt2",
            stackId: "a",
            fill: "#A239CA"
          },
          { name: "True", dataKey: "trueDealt2", stackId: "a", fill: "#4717F6" }
        ];
      case "Damage Taken":
        return [
          { name: "Magic", dataKey: "magicTaken1", stackId: "a", fill: "#A239CA" },
          {
            name: "Physical",
            dataKey: "physicalTaken1",
            stackId: "a",
            fill: "#4717F6"
          },
          { name: "True", dataKey: "trueTaken1", stackId: "a", fill: "#A239CA" },
          { name: "Magic", dataKey: "magicTaken2", stackId: "a", fill: "#4717F6" },
          {
            name: "Physical",
            dataKey: "physicalTaken2",
            stackId: "a",
            fill: "#A239CA"
          },
          { name: "True", dataKey: "trueTaken2", stackId: "a", fill: "#4717F6" }
        ];
      case "Healing":
        return [
          { name: "Healing", dataKey: "heal1", stackId: "a", fill: "#A239CA" },
          { name: "Healing", dataKey: "heal2", stackId: "a", fill: "#4717F6" }
        ];
      default:
        return [];
    }
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
        data={this.generateData()}
        changeGraph={this.changeGraph}
        barData={this.generateBars()}
      />
    );
  }
}

export default MatchGraphContainer;
