import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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
          <TextField
            label="Label"
            defaultValue={props.fieldData.label}
            onChange={(e) => {
              props.handleEditField(e, props.index, "label");
            }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            variant="outlined"
            style={{ minWidth: "120px" }}
          >
            <InputLabel id="Type">Type</InputLabel>
            <Select
              labelId="Type"
              label="Type"
              defaultValue={props.fieldData.type}
              onChange={(e) => {
                props.handleEditField(e, props.index, "type");
              }}
            >
              {getFieldTypes()}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  };

  return getField();
}

export default TypeFields;
