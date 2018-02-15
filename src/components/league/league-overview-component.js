import React from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardMedia, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = theme => ({
  card: {
    display: "flex",
    margin: "0 auto",
    maxWidth: 1100
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200,
    height: 200
  },
  controls: {
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});
const LeagueOverviewComponent = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">
              {props.player.name}
            </Typography>
          </CardContent>
        </div>

        <div className={classes.controls}>
          <CardMedia
            className={classes.cover}
            image={props.rankIconPath}
            title="Live from space album cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(LeagueOverviewComponent);

