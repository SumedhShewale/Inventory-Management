import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

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
        <Grid item xs={12}>
          <Typography display="inline">
            {"Type: " + props.data["type"]}
          </Typography>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => props.handleDeleteType(props.id)}
            style={{ float: "right", marginRight: "15px" }}
          >
            Delete
          </Button>
        </Grid>
        {props.labels.map((label, index) => {
          return (
            label !== "id" && (
              <Grid item xs={12}>
                <TextField
                  label={label}
                  defaultValue={props.values[index]}
                  // onChange={(e) => {
                  //   handleEditField(e, undefined, "type");
                  // }}
                />
              </Grid>
            )
          );
        })}
      </Grid>
    );
  };

  return getField();
}

export default ObjectFields;
