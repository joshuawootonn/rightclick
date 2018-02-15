import React from "react";
import { withStyles } from "material-ui/styles";
import { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
const styles = theme => ({
  root: {
    display: "flex",
    marginLeft: 20,
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});
export const MatchGraphSelectComponent = props => {
  const { classes } = props;
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Options">Options</InputLabel>
        <Select value={props.type} onChange={props.changeGraph}>
          <MenuItem value="Gold">Gold</MenuItem>
          <MenuItem value="Dealt">Dealt</MenuItem>
          <MenuItem value="Taken">Taken</MenuItem>
          <MenuItem value="Healing">Healing</MenuItem>
        </Select>
      </FormControl>
      {props.type === "Dealt" || props.type === "Taken"
        ? <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sub-options">Sub Options</InputLabel>
            <Select value={props.typeSub} onChange={props.changeSubGraph}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Magic">Magic</MenuItem>
              <MenuItem value="Physical">Physical</MenuItem>
              <MenuItem value="True">True</MenuItem>
            </Select>
          </FormControl>
        : null}
    </form>
  );
};

export default withStyles(styles)(MatchGraphSelectComponent);
