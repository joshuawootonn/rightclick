import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const SearchComponent = props => {
  const { classes } = props;
  return (
    <div>
      <TextField
        label="Enter Summoner"
        className={classes.input}
        type="text"
        {...props.input}
      />
      
      <p> </p>      
    </div>
  );
};

SearchComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchComponent);
