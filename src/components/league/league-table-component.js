import React from "react";
import { Link } from "react-router-dom";
const LeagueOverviewComponent = props => {
  const league = props.league;

  const tableContents = league.division.map((ele, i) => {
    return (
      <tr key={i} onClick={()=>{props.rowClick(ele.playerOrTeamName)}}>
        <th>{i}</th>
        <td>
          <Link to={`/${ele.playerOrTeamName}`}>{ele.playerOrTeamName}</Link>
        </td>
        <td>{ele.leaguePoints}</td>
        <td>{ele.wins}</td>
        <td>{ele.losses}</td>
      </tr>
    );
  });

  return (
    <div className="tile box is-12 parent primary">
      <div className="middle width100">
      
      <h1 className="title ">{props.league.leagueName}</h1>
     
      <table className="is-fullwidth table primary">
        <thead>
          <tr>
            <th />
            <th>
              Summoner
            </th>
            <th>
              LP
            </th>
            <th>
              Wins
            </th>
            <th>
              Losses
            </th>
          </tr>
        </thead>
        <tbody>{tableContents}</tbody>
      </table>
      </div>
      
    </div>
  );
};

export default LeagueOverviewComponent;
