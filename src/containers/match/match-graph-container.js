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
    switch (this.state.currentGraph) {
      case "Gold":
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
      case "Damage Dealt":
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
        return arr;
      case "Damage Taken":
        for (let i = 0; i < goodTeam.length; i++) {
          arr[i] = {
            name: goodTeam[i].account.summonerName,
            magic1: goodTeam[i].stats.damageTakenMagic,
            physical1: goodTeam[i].stats.damageTakenPhysical,
            true1: goodTeam[i].stats.damageTakenTrue
          };
          arr[i + goodTeam.length] = {
            name: badTeam[i].account.summonerName,
            magic2: badTeam[i].stats.damageTakenMagic,
            physical2: badTeam[i].stats.damageTakenPhysical,
            true2: badTeam[i].stats.damageTakenTrue
          };
        }
        return arr;
      case "Healing":
        for (let i = 0; i < goodTeam.length; i++) {
          arr[i] = {
            name: goodTeam[i].account.summonerName,
            heal1: goodTeam[i].stats.healing
          };
          arr[i + goodTeam.length] = {
            name: badTeam[i].account.summonerName,
            heal2: badTeam[i].stats.healing
          };
        }
        return arr;
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
          { name: "Magic", dataKey: "magic1", stackId: "a", fill: "#A239CA" },
          { name: "Physical", dataKey: "physical1", stackId: "a", fill: "#4717F6" },
          { name: "True", dataKey: "true1", stackId: "a", fill: "#A239CA" },
          { name: "Magic", dataKey: "magic2", stackId: "a", fill: "#4717F6" },
          { name: "Physical", dataKey: "physical2", stackId: "a", fill: "#A239CA" },
          { name: "True", dataKey: "true2", stackId: "a", fill: "#4717F6" }
        ];
      case "Damage Taken":
        return [
          { name: "Magic", dataKey: "magic1", stackId: "a", fill: "#A239CA" },
          { name: "Physical", dataKey: "physical1", stackId: "a", fill: "#4717F6" },
          { name: "True", dataKey: "true1", stackId: "a", fill: "#A239CA" },
          { name: "Magic", dataKey: "magic2", stackId: "a", fill: "#4717F6" },
          { name: "Physical", dataKey: "physical2", stackId: "a", fill: "#A239CA" },
          { name: "True", dataKey: "true2", stackId: "a", fill: "#4717F6" }
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
