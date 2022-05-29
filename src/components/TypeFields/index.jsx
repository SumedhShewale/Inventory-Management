import React from "react";
import { Grid, MenuItem, Select, TextField } from "@mui/material";
import "./style.css";

function TypeFields(props) {
  const getFieldTypes = () => {
    let options = [];
    options.push(
      <MenuItem value="Text">Text</MenuItem>,
      <MenuItem value="Number">Number</MenuItem>,
      <MenuItem value="Date">Date</MenuItem>
    );
    return options;
  };

  const getField = () => {
    return (
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <TextField label="Label" value={props.fieldData.label}></TextField>
        </Grid>
        <Grid item xs={6}>
          <Select label="Type" value={props.fieldData.type}>
            {getFieldTypes()}
          </Select>
        </Grid>
      </Grid>
    );
  };

  return getField();
}

export default TypeFields;
