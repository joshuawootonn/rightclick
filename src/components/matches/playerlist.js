import React from 'react';


class PlayerList extends React.Component {

  render() {
    var playerlist = [], championlist = [], redTeam, blueTeam;
    this.props.match.participantIdentities.forEach(function (element) {
      playerlist.push(element.player.summonerName);
    }, this);
    this.props.match.participants.forEach(function (element) {
      championlist.push(element.championId)
    }, this);

    championlist.forEach(function (element, index) {
      championlist[index] = this.props.data.champions.keys[element];
    }, this)


    redTeam = playerlist.map((player, i) => {
      if (i < 5) {
        return (<tr key={i}><td width="30%">
          <figure className="image is-24x24">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/champion/${championlist[i]}.png`} />
          </figure>
        </td><td width="70%">{playerlist[i]}</td></tr>);
      } else {
        return null;
      }
    })
    blueTeam = playerlist.map((player, i) => {
      if (i >= 5) {
        return (<tr key={i}><td width="30%">
          <figure className="image is-24x24">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/champion/${championlist[i]}.png`} />
          </figure>
        </td><td width="70%">{playerlist[i]}</td></tr>);
      } else {
        return null;
      }
    })


    return (
      <div className="column playerlist is-4">
        <div className="columns">
          <div className="column">
            <table className="table">
              <tbody>
                {redTeam}
              </tbody>
            </table>

          </div>
          <div className="column">
            <table className="table">
              <tbody>
                {blueTeam}
              </tbody>
            </table>

          </div>

        </div>
      </div>
      

    );

  }
};
export default PlayerList;
