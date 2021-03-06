import React from "react";
import { withStyles } from "material-ui/styles";
import classNames from 'classnames';
import Grid from "material-ui/Grid";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Avatar from 'material-ui/Avatar';
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    cursor: "pointer",
    width:"100%"
  },
  avatar:{
    margin:10,
    width: 60,
    height: 60,
  },
});
const MatchScoreBoardComponent = props => {
  const { classes } = props;

  return (
    <Grid className={classes.container} container spacing={24}>
      <Grid item xs={12} md={6}>
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
                <TableRow key={i} hover onClick={() => {
                  props.rowClick(good.account.summonerName);
                }}>
                  <TableCell>
                    {good.account.summonerName}
                  </TableCell>
                  <TableCell numeric>
                    {good.stats.kills}/{good.stats.deaths}/{good.stats.assists}
                  </TableCell>

                  <TableCell>
                  <Avatar
                      alt="Friendly champion"
                      src={`http://ddragon.leagueoflegends.com/cdn/${props
                        .static.version[0]}/img/champion/${props.static.champion
                        .data[good.championId].key}.png`}
                        className={classNames(classes.avatar)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={12} sm={6}>
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
                <TableRow key={i} hover onClick={() => {
                  props.rowClick(bad.account.summonerName);
                }}>
                  <TableCell>
                  <Avatar
                      alt="Friendly champion"
                      src={`http://ddragon.leagueoflegends.com/cdn/${props
                        .static.version[0]}/img/champion/${props.static.champion
                        .data[bad.championId].key}.png`}
                        className={classNames(classes.avatar)}
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
