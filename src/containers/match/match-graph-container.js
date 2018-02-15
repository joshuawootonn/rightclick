import React, { Component } from "react";
import MatchGraphComponent from "../../components/match/match-graphs-component";
class MatchGraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphTypes: ["Gold", "Dealt", "Taken", "Healing"],
      currentGraph: "Gold",
      currentSubGraph: ""
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
        dealt1: goodTeam[i].stats.damageDealt,
        magicDealt1: goodTeam[i].stats.damageDealtMagic,
        physicalDealt1: goodTeam[i].stats.damageDealtPhysical,
        trueDealt1: goodTeam[i].stats.damageDealtTrue,
        taken1: goodTeam[i].stats.damageTaken,
        magicTaken1: goodTeam[i].stats.damageTakenMagic,
        physicalTaken1: goodTeam[i].stats.damageTakenPhysical,
        trueTaken1: goodTeam[i].stats.damageTakenTrue,
        heal1: goodTeam[i].stats.healing
      };
      arr[i + goodTeam.length] = {
        name: badTeam[i].account.summonerName,
        gold2: badTeam[i].stats.gold,
        dealt2: badTeam[i].stats.damageDealt,
        magicDealt2: badTeam[i].stats.damageDealtMagic,
        physicalDealt2: badTeam[i].stats.damageDealtPhysical,
        trueDealt2: badTeam[i].stats.damageDealtTrue,
        taken2: badTeam[i].stats.damageTaken,
        magicTaken2: badTeam[i].stats.damageTakenMagic,
        physicalTaken2: badTeam[i].stats.damageTakenPhysical,
        trueTaken2: badTeam[i].stats.damageTakenTrue,
        heal2: badTeam[i].stats.healing
      };
    }
    return arr;
  };
  changeGraph = event => {
    this.setState({ 
      currentGraph: event.target.value,
      currentSubGraph: ""
    });
  };
  changeSubGraph = event => {
    this.setState({
      currentSubGraph: event.target.value
    })
  }
  generateBars = () => {
    switch (this.state.currentGraph+this.state.currentSubGraph) {
      case "Gold":
        return [
          { name: "Gold", dataKey: "gold1", stackId: "a", fill: "#03A9F4" },
          { name: "Gold", dataKey: "gold2", stackId: "a", fill: "#8BC34A" }
        ];
      case "Dealt":
        return [
          { name: "Dealt", dataKey: "dealt1", stackId: "a", fill: "#03A9F4" },
          { name: "Dealt", dataKey: "dealt2", stackId: "a", fill: "#8BC34A" }
        ];
      case "DealtPhysical":
        return [
          {
            name: "Physical",
            dataKey: "physicalDealt1",
            stackId: "a",
            fill: "#8BC34A"
          },

          {
            name: "Physical",
            dataKey: "physicalDealt2",
            stackId: "a",
            fill: "#03A9F4"
          }
        ];
      case "DealtMagic":
        return [
          {
            name: "Magic",
            dataKey: "magicDealt1",
            stackId: "a",
            fill: "#03A9F4"
          },
          {
            name: "Magic",
            dataKey: "magicDealt2",
            stackId: "a",
            fill: "#8BC34A"
          }
        ];
      case "DealtTrue":
        return [
          {
            name: "True",
            dataKey: "trueDealt1",
            stackId: "a",
            fill: "#03A9F4"
          },
          { name: "True", dataKey: "trueDealt2", stackId: "a", fill: "#8BC34A" }
        ];
      case "Taken":
        return [
          { name: "Taken", dataKey: "taken1", stackId: "a", fill: "#03A9F4" },
          { name: "Taken", dataKey: "taken2", stackId: "a", fill: "#8BC34A" }
        ];
      case "TakenPhysical":
        return [
          {
            name: "Physical",
            dataKey: "physicalTaken1",
            stackId: "a",
            fill: "#8BC34A"
          },

          {
            name: "Physical",
            dataKey: "physicalTaken2",
            stackId: "a",
            fill: "#03A9F4"
          }
        ];
      case "TakenMagic":
        return [
          {
            name: "Magic",
            dataKey: "magicTaken1",
            stackId: "a",
            fill: "#03A9F4"
          },

          {
            name: "Magic",
            dataKey: "magicTaken2",
            stackId: "a",
            fill: "#8BC34A"
          }
        ];

      case "TakenTrue":
        return [
          {
            name: "True",
            dataKey: "trueTaken1",
            stackId: "a",
            fill: "#03A9F4"
          },

          { name: "True", dataKey: "trueTaken2", stackId: "a", fill: "#8BC34A" }
        ];

      case "Healing":
        return [
          { name: "Healing", dataKey: "heal1", stackId: "a", fill: "#03A9F4" },
          { name: "Healing", dataKey: "heal2", stackId: "a", fill: "#8BC34A" }
        ];
      default:
        return [];
    }
  };
  render() {
    return (
      <MatchGraphComponent
        type={this.state.currentGraph}
        typeSub={this.state.currentSubGraph}
        data={this.generateData()}
        changeGraph={this.changeGraph}
        changeSubGraph={this.changeSubGraph}
        barData={this.generateBars()}
      />
    );
  }
}

export default MatchGraphContainer;

// case "DealtMagic":

//         return [
//           { name: "Magic", dataKey: "magic1Dealt", stackId: "a", fill: "#03A9F4" },
//           {
//             name: "Physical",
//             dataKey: "physicalDealt1",
//             stackId: "a",
//             fill: "#8BC34A"
//           },
//           { name: "True", dataKey: "true1Dealt", stackId: "a", fill: "#03A9F4" },
//           { name: "Magic", dataKey: "magicDealt2", stackId: "a", fill: "#8BC34A" },
//           {
//             name: "Physical",
//             dataKey: "physicalDealt2",
//             stackId: "a",
//             fill: "#03A9F4"
//           },
//           { name: "True", dataKey: "trueDealt2", stackId: "a", fill: "#8BC34A" }
//         ];
//       case "Taken":
//         return [
//           { name: "Magic", dataKey: "magicTaken1", stackId: "a", fill: "#03A9F4" },
//           {
//             name: "Physical",
//             dataKey: "physicalTaken1",
//             stackId: "a",
//             fill: "#8BC34A"
//           },
//           { name: "True", dataKey: "trueTaken1", stackId: "a", fill: "#03A9F4" },
//           { name: "Magic", dataKey: "magicTaken2", stackId: "a", fill: "#8BC34A" },
//           {
//             name: "Physical",
//             dataKey: "physicalTaken2",
//             stackId: "a",
//             fill: "#03A9F4"
//           },
//           { name: "True", dataKey: "trueTaken2", stackId: "a", fill: "#8BC34A" }
//         ];
