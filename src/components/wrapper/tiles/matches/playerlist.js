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
        return (<tr><td>
          <figure class="image is-24x24">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/champion/${championlist[i]}.png`} />
          </figure>
        </td><td>{playerlist[i]}</td></tr>);
      } else {
        return null;
      }
    })
    blueTeam = playerlist.map((player, i) => {
      if (i >= 5) {
        return (<tr><td>
          <figure class="image is-24x24">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/champion/${championlist[i]}.png`} />
          </figure>
        </td><td>{playerlist[i]}</td></tr>);
      } else {
        return null;
      }
    })


    return (
      <div className="column">
        <div className="columns ">
          <div className="column">
            <table>
              <tbody>
                {redTeam}
              </tbody>
            </table>
          </div>
          <div className="column">
            <table>
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
