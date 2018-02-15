import React from "react";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
const styles = theme => ({
  root: {
    margin: "0 auto",
    maxWidth: 1100,
    overflowX: "auto"
  },
  header:{
    paddingTop: 16,
    paddingLeft: 16
  },
  table: {
    minWidth: 700,
    cursor: "pointer"
  }
});

const LeagueOverviewComponent = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      
      <Typography className={classes.header} variant="headline">{props.league.leagueName}</Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell >Summoner</TableCell>
            <TableCell numeric>LP</TableCell>
            <TableCell numeric>Wins</TableCell>
            <TableCell numeric>Losses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.league.division.map((ele, i) => {
            return (
              <TableRow key={i} hover onClick={() => {
                props.rowClick(ele.playerOrTeamName);
              }}>                
                <TableCell>
                  {ele.playerOrTeamName}
                </TableCell>
                <TableCell numeric>
                  {ele.leaguePoints}
                </TableCell>
                <TableCell numeric>
                  {ele.wins}
                </TableCell>
                <TableCell numeric>
                  {ele.losses}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(LeagueOverviewComponent);
