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
  generateDate = () => {
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
  changeGraph = (event) => {
    console.log(event)
    this.setState({currentGraph: event.target.value});
  } 
  generateBars = () => {};
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
        changeGraph={this.changeGraph}
      />
    );
  }
}

export default MatchGraphContainer;
