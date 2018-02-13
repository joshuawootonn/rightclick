import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
  root: {
    width: '100%',    
  }, 
  
});

function LinearQuery(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress className={classes.color} mode="query" />      
    </div>
  );
}

LinearQuery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearQuery);