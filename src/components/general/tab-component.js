import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Tabs, { Tab } from "material-ui/Tabs";
const styles = theme => ({
  root: {
    flexGrow: 1,
   
  }
});
class TabComponent extends React.Component {
  
  render() {
    const { classes } = this.props;
    console.log(this.props.current)
    return (
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
    );
  }
}

export default withStyles(styles)(TabComponent);
// <div className="tabs is-centered">
//     <ul >
//       {props.tabs.map((tab) => {
//         const classes = `${props.current === tab ? "active" : null}`
//         return (
//           <li key={tab} onClick={props.handleTabChange.bind(this,tab)} >
//             <a className={classes}>{tab}</a>
//           </li>
//         );
//       })}
//     </ul>
//     </div>
