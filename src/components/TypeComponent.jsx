import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addObjectType,
  editObjectType,
  selectObjectsTypes,
} from "../features/counter/counterSlice";
import TypeFields from "./TypeFields";

function TypeComponent(props) {
  let types = useSelector(selectObjectsTypes);
  const dispatch = useDispatch();

  const handleAddField = () => {
    let typeCopy = { ...types[props.index] };
    typeCopy.fields = [
      ...typeCopy.fields,
      {
        type: "",
        label: "",
      },
    ];
    dispatch(editObjectType(typeCopy, props.index));
  };

  const handleEditField = (e, index, fieldOf) => {
    let value = e.target.value;
    let typeCopy = { ...types[props.index] };
    if (!isNaN(index)) {
      let fieldCopy = { ...typeCopy["fields"][index] };
      fieldCopy[fieldOf] = value;
      let fields = [...typeCopy["fields"]];
      fields[index] = {
        ...typeCopy["fields"][index],
        ...fieldCopy,
      };
      typeCopy["fields"] = [...fields];
    } else {
      typeCopy[fieldOf] = value;
    }
    dispatch(editObjectType(typeCopy, props.index));
  };

  return (
    <Grid
      item
      container
      md={4}
      lg={3}
      spacing={2}
      style={{ border: "1px solid black", margin: "10px" }}
    >
      <Grid item xs={12}>
        <TextField
          label="Object Type"
          defaultValue={props.data.type}
          onChange={(e) => {
            handleEditField(e, undefined, "type");
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Object Title"
          defaultValue={props.data.title}
          onChange={(e) => {
            handleEditField(e, undefined, "title");
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{"Fields"}</Typography>
      </Grid>
      {props.data.fields.map((fieldData, index) => (
        <TypeFields
          fieldData={fieldData}
          index={index}
          handleEditField={handleEditField}
        />
      ))}
      <Grid item xs={12} style={{ padding: "10px" }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => handleAddField()}
        >
          Add Field
        </Button>
      </Grid>
    </Grid>
  );
}

export default TypeComponent;
