import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addObjectType,
  selectObjectsTypes,
} from "../features/counter/counterSlice";
import NavBar from "./NavBar";
import TypeComponent from "./TypeComponent";

function ManageTypes(props) {
  let types = useSelector(selectObjectsTypes);
  const dispatch = useDispatch();

  const getTypes = () => {
    return types.map((data, index) => {
      return <TypeComponent data={data} index={index} />;
    });
  };

  return (
    <>
      <NavBar />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {getTypes()}
        <Grid item style={{ padding: "20px" }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(
                addObjectType([
                  {
                    title: "",
                    type: "",
                    fields: [],
                  },
                ])
              )
            }
          >
            Add Type
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ManageTypes;
