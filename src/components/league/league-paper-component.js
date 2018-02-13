import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  })
});
export const LeaguePaperComponent = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          {props.header}
        </Typography>
        <Typography align="right" variant="headline" component="h3">
          {props.subheader}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(LeaguePaperComponent);
