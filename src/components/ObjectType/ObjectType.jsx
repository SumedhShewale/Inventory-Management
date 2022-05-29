import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addition,
  addObject,
  addObjectType,
  selectObjects,
  selectObjectsTypes,
} from "../../features/counter/counterSlice";
import NavBar from "../NavBar";
import ObjectFields from "./ObjectFields";

function ObjectType(props) {
  let objects = useSelector(selectObjects);
  objects = props.type
    ? objects.filter((object) => object.type === props.type)
    : objects;

  let types = useSelector(selectObjectsTypes);
  const dispatch = useDispatch();

  const getTypeData = (objectType) => {
    let currentType = types.find((typeData) => typeData.type === objectType);
    let labels = {};
    currentType.fields.forEach((ele) => {
      labels[ele.label] = "";
    });

    return [
      {
        type: objectType,
        ...labels,
      },
    ];
  };

  return (
    <>
      <NavBar />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {objects.map((data, index) => {
          return (
            <ObjectFields
              key={index}
              labels={Object.keys(data)}
              values={Object.values(data)}
            />
          );
        })}
        <Grid item xs={12} md={6} lg={3} style={{ padding: "20px" }}>
          {props.type ? (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() =>
                dispatch(
                  addObject([
                    {
                      type: props.type,
                      Name: "",
                      Title: "",
                      Grade: "",
                      "Bar Length": "",
                      Date: "",
                    },
                  ])
                )
              }
            >
              Add Item
            </Button>
          ) : (
            <FormControl
              key={objects.length}
              fullWidth
              variant="outlined"
              style={{ minWidth: "120px" }}
            >
              <InputLabel id="Add Item">Add Item</InputLabel>
              <Select
                autoWidth
                labelId="Add Item"
                label="Add Item"
                defaultValue={""}
                onChange={(e) =>
                  dispatch(addObject(getTypeData(e.target.value)))
                }
              >
                {types.map((type) => (
                  <MenuItem value={type.type}>{type.type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default ObjectType;
