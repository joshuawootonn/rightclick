import React from "react";
import { withStyles } from "material-ui/styles";
import {  CardContent, CardActions } from "material-ui/Card";
import classnames from "classnames";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import classNames from "classnames";
const styles = theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between"
  },
  avatar: {
    margin: 10,
    width: 90,
    height: 90
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  actions: {
    display: "flex"
  },
  content: {},
  cover: {
    width: 151,
    height: 151
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

const MatchOverviewComponent = props => {
  const player = props.match.mainPlayer;

  const { champion, version } = props.static;
  const { classes } = props;
  //console.log(props);
  return (
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Avatar
          alt="Player's champion"
          src={`http://ddragon.leagueoflegends.com/cdn/${version[0]}/img/champion/${champion
            .data[player.championId].key}.png`}
          className={classNames(classes.avatar)}
        />
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="headline">
          {player.win ? "Win" : "Loss"}
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          {champion.data[player.championId].key}
        </Typography>
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="headline">
          {player.stats.kills}/{player.stats.deaths}/{player.stats.assists}
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          KDA:{player.stats.kda}
        </Typography>
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="headline">
          CS: {player.stats.cs}
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          Level: {player.stats.level}
        </Typography>
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="headline">
          {props.match.general.gameDuration}
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          {props.match.general.gameCreation}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton
          onClick={props.expand}
          className={classnames(classes.expand, {
            [classes.expandOpen]: props.isExpanded
          })}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(MatchOverviewComponent);
