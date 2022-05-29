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
  editObject,
  selectObjects,
  selectObjectsTypes,
} from "../../features/counter/counterSlice";
import NavBar from "../NavBar";
import ObjectFields from "./ObjectFields";

function ObjectType(props) {
  let objects, unfilteredObjects;
  objects = unfilteredObjects = useSelector(selectObjects);
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
        id: Math.random().toString(),
        type: objectType,
        ...labels,
      },
    ];
  };

  const handleEditField = (value, fieldOf, id) => {
    if (fieldOf === "Date") {
      let date = new Date(value).getDate();
      let month = new Date(value).getMonth() + 1;
      let year = new Date(value).getFullYear();
      value = date + "-" + month + "-" + year;
    }
    let currentObject;
    let unfilteredObjectsCopy = [...unfilteredObjects];
    currentObject = unfilteredObjectsCopy.find((ele) => ele.id === id);
    currentObject[fieldOf] = value;
    dispatch(editObject(currentObject, props.index));
  };

  const handleDeleteType = (id) => {
    let objectsCopy = [...unfilteredObjects];
    objectsCopy = objectsCopy.filter((object) => object.id !== id);
    dispatch(addition([...objectsCopy]));
  };

  return (
    <>
      <NavBar />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {objects.map((data, index) => {
          return (
            <ObjectFields
              key={data.id}
              id={data.id}
              index={index}
              data={data}
              labels={Object.keys(data)}
              values={Object.values(data)}
              handleDeleteType={handleDeleteType}
              handleEditField={handleEditField}
              unfilteredObjects={unfilteredObjects}
              types={types}
            />
          );
        })}
        <Grid item xs={12} md={6} lg={3} style={{ padding: "20px" }}>
          {props.type ? (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={(e) => dispatch(addObject(getTypeData(props.type)))}
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
