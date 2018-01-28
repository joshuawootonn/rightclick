import React from "react";

const LeagueOverviewComponent = props => {

  const league = props.league;


  

  return (
    <div className="tile box is-12">
      <div className="columns is-vcentered">
        <div className="column">
          <h1>{props.league.leagueName}</h1>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <abbr title="Position">Pos</abbr>
                </th>
                <th>Team</th>
                <th>
                  <abbr title="Played">Pld</abbr>
                </th>
                <th>
                  <abbr title="Won">W</abbr>
                </th>
                <th>
                  <abbr title="Drawn">D</abbr>
                </th>
                <th>
                  <abbr title="Lost">L</abbr>
                </th>
                <th>
                  <abbr title="Goals for">GF</abbr>
                </th>
                <th>
                  <abbr title="Goals against">GA</abbr>
                </th>
                <th>
                  <abbr title="Goal difference">GD</abbr>
                </th>
                <th>
                  <abbr title="Points">Pts</abbr>
                </th>
                <th>Qualification or relegation</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeagueOverviewComponent;
