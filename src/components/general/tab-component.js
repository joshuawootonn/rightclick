import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Tabs, { Tab } from "material-ui/Tabs";
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class TabComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.props.current}
            onChange={this.props.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="League" />
            <Tab label="Matches" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TabComponent);

