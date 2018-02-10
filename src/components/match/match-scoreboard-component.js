import React from "react";
const MatchScoreBoardComponent = props => {
  console.log(props);
  const goodRows = props.match.goodTeam.map((good, i) => {
    return (
      <tr>
        <td >
          {good.stats.kills}/{good.stats.deaths}/{good.stats.assists}
        </td>
        <td >
          {good.account.summonerName}
        </td>
        <td >
          <figure className="image is-48x48 champion-img">
            <img
              alt="Friendly champion"
              src={`http://ddragon.leagueoflegends.com/cdn/${props.static
                .version[0]}/img/champion/${props.static.champion.data[
                good.championId
              ].key}.png`}
            />
          </figure>
        </td>
      </tr>
    );
  });
  const badRows = props.match.badTeam.map((bad, i) => {
    return (
      <tr>
        <td >
          <figure className="image is-48x48">
            <img 
              alt="Enemy champion"              
              src={`http://ddragon.leagueoflegends.com/cdn/${props.static
                .version[0]}/img/champion/${props.static.champion.data[
                bad.championId
              ].key}.png`}
            />
          </figure>
        </td>
        <td>
          {bad.account.summonerName}
        </td>
        <td>
          {bad.stats.kills}/{bad.stats.deaths}/{bad.stats.assists}
        </td>
      </tr>
    );
  });
  return (
    <div className="columns is-12">
      <div className="columm is-half">
        <table className="table is-hoverable  is-fullwidth">
          <thead>
            <tr>
              <th >
                <abbr>KDA</abbr>
              </th>
              <th >
                <abbr>Summoner</abbr>
              </th>
              <th >
                <abbr>Champion</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {goodRows}
          </tbody>
        </table>
      </div>
      <div className="columm is-half">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th >
                <abbr>Champion</abbr>
              </th>
              <th >
                <abbr>Summoner</abbr>
              </th>
              <th >
                <abbr>KDA</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {badRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchScoreBoardComponent;
