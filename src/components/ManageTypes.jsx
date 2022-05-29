import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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
  // types = props.type
  //   ? objects.filter((object) => object.type === props.type)
  //   : objects;
  const dispatch = useDispatch();
  /////  STATE
  // let types = [
  //   {
  //     title: "Bull Dozer",
  //     type: "ASdas",
  //     fields: [
  //       { type: "Text", label: "Name" },
  //       { type: "Number", label: "Quantity" },
  //       { type: "Text", label: "Brand" },
  //     ],
  //   },
  //   {
  //     title: "ZXC",
  //     type: "ZXCZXC",
  //     fields: [
  //       { type: "Text", label: "Name" },
  //       { type: "Number", label: "Quantity" },
  //       { type: "Date", label: "Date" },
  //     ],
  //   },
  // ];

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
