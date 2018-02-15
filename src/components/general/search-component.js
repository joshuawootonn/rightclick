import React from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  index: {
    color:"white",     
  },
  intro:{
    color: "grey"
  }
});
const SearchComponent = props => {
  const { classes } = props;
  return (
    <div>
      <TextField
        label="Enter Summoner"
        helperTextClassName={classes.textField}
        labelClassName={props.index ? classes.index : classes.intro}
        InputProps={{disableUnderline: false
       }}
        type="text"    
        className={props.index ? classes.index : classes.intro}
        {...props.input}
      />
      
      <p> </p>      
    </div>
  );
};


export default withStyles(styles)(SearchComponent);
