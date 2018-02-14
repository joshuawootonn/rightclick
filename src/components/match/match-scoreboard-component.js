import React from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
  }
});
const MatchScoreBoardComponent = props => {
  const { classes } = props;

  return (
    <Grid className={classes.container} container spacing={24}>
      <Grid item xs={6}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Summoner</TableCell>
              <TableCell numeric>KDA</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.match.goodTeam.map((good, i) => {
              return (
                <TableRow key={i} onClick={() => {
                  props.rowClick(good.account.summonerName);
                }}>
                  <TableCell>
                    {good.account.summonerName}
                  </TableCell>
                  <TableCell numeric>
                    {good.stats.kills}/{good.stats.deaths}/{good.stats.assists}
                  </TableCell>

                  <TableCell>
                    <img
                      alt="Friendly champion"
                      src={`http://ddragon.leagueoflegends.com/cdn/${props
                        .static.version[0]}/img/champion/${props.static.champion
                        .data[good.championId].key}.png`}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={6}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell numeric>KDA</TableCell>
              <TableCell>Summoner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.match.badTeam.map((bad, i) => {
              return (
                <TableRow key={i} onClick={() => {
                  props.rowClick(bad.account.summonerName);
                }}>
                  <TableCell>
                    <img
                      alt="Friendly champion"
                      src={`http://ddragon.leagueoflegends.com/cdn/${props
                        .static.version[0]}/img/champion/${props.static.champion
                        .data[bad.championId].key}.png`}
                    />
                  </TableCell>
                  <TableCell numeric>
                    {bad.stats.kills}/{bad.stats.deaths}/{bad.stats.assists}
                  </TableCell>
                  <TableCell>
                    {bad.account.summonerName}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MatchScoreBoardComponent);
