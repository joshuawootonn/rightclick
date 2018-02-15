import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    margin: "0 auto",
    maxWidth: 1100
  },
  size1:{
    paddingTop: 16,
    paddingLeft: 16,
  },
  size2:{
    paddingBottom: 16,
    paddingRight: 16,
  }
});
export const LeaguePaperComponent = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" className={classes.size1} component="h3">
          {props.header}
        </Typography>
        <Typography align="right" className={classes.size2} variant="headline" component="h3">
          {props.subheader}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(LeaguePaperComponent);
