import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import TypeFields from "./TypeFields";

function TypeComponent(props) {
  return (
    <Grid
      item
      container
      xs={12}
      md={6}
      lg={3}
      spacing={2}
      style={{ border: "1px solid black", margin: "10px" }}
    >
      <Grid item xs={12}>
        <Typography variant="body2">{"Object Type"}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField value={props.type}></TextField>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{"Object Title"}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField value={props.title}></TextField>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{"Fields"}</Typography>
      </Grid>
      {props.fields.map((fieldData) => (
        <TypeFields fieldData={fieldData} />
      ))}
      <Grid item xs={12} style={{ padding: "10px" }}>
        <Button size="small" variant="contained" color="primary" onClick={""}>
          Add Field
        </Button>
      </Grid>
    </Grid>
  );
}

export default TypeComponent;
