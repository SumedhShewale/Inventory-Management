import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function ObjectFields(props) {
  const getDate = (value) => {
    let splits = value.split("-");
    return new Date(splits[2], splits[1], splits[0]);
  };

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
          let fieldType;
          if (label !== "id" && label !== "type") {
            fieldType = props.types.find(
              (typeData) => typeData.type === props.data.type
            );
            fieldType = fieldType.fields.find((field) => field.label === label);
          }
          return label !== "id" && label !== "type" && fieldType ? (
            <Grid item xs={12}>
              {fieldType.type === "Number" ? (
                <TextField
                  label={label}
                  type="number"
                  defaultValue={props.values[index]}
                  onChange={(e) => {
                    props.handleEditField(e.target.value, label, props.data.id);
                  }}
                />
              ) : fieldType.type === "Date" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label={label}
                    value={getDate(props.values[index])}
                    onChange={(newValue) => {
                      props.handleEditField(newValue, label, props.data.id);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              ) : (
                fieldType.type === "Text" && (
                  <TextField
                    label={label}
                    defaultValue={props.values[index]}
                    onChange={(e) => {
                      props.handleEditField(
                        e.target.value,
                        label,
                        props.data.id
                      );
                    }}
                  />
                )
              )}
            </Grid>
          ) : null;
        })}
      </Grid>
    );
  };

  return getField();
}

export default ObjectFields;
