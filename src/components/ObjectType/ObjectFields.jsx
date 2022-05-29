import React from "react";
import { Grid, TextField } from "@mui/material";

function ObjectFields(props) {
  const getField = () => {
    return (
      <Grid
        item
        container
        spacing={2}
        xs={12}
        md={6}
        lg={3}
        style={{ margin: "10px", border: "1px solid black" }}
      >
        {props.labels.map((label, index) => {
          return (
            <Grid item xs={12}>
              <TextField
                label={label}
                defaultValue={props.values[index]}
              ></TextField>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return getField();
}

export default ObjectFields;
