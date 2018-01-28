import React from "react";
import {Link} from 'react-router-dom';
const LeagueOverviewComponent = props => {
  const league = props.league;

  

  const tableContents = league.division.map((ele, i) => {
    return (
      <tr key={i}>
        <th>{i}</th>
        <td>
          <Link to={`/${ele.playerOrTeamName}`}>
            {ele.playerOrTeamName}
          </Link>
        </td>
        <td>{ele.leaguePoints}</td>
        <td>{ele.wins}</td>
        <td>{ele.losses}</td>      
        
      </tr>
    );
  });

  return (
    <div className="tile box is-12">
      <div className="columns is-vcentered">
        <div className="column">
          <h1>
            {props.league.leagueName}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>
                  <abbr title="Summoner">Summoner</abbr>
                </th>                
                <th>
                  <abbr title="LP">LP</abbr>
                </th>
                <th>
                  <abbr title="Wins">Wins</abbr>
                </th>
                <th>
                  <abbr title="Losses">Losses</abbr>
                </th>                
              </tr>
            </thead>
            <tbody>
              {tableContents}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeagueOverviewComponent;
