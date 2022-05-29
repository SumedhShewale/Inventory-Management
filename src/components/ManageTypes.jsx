import { Button, Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import TypeComponent from "./TypeComponent";

function ManageTypes(props) {
  /////  STATE
  let types = [
    {
      title: "ASD",
      type: "ASdas",
      fields: [
        { type: "Text", label: "Name" },
        { type: "Number", label: "Quantity" },
        { type: "Text", label: "Brand" },
      ],
    },
    {
      title: "ZXC",
      type: "ZXCZXC",
      fields: [
        { type: "Text", label: "Name" },
        { type: "Number", label: "Quantity" },
        { type: "Date", label: "Date" },
      ],
    },
  ];

  const getTypes = () => {
    return types.map((data) => {
      return (
        <TypeComponent
          title={data.title}
          type={data.type}
          fields={data.fields}
        />
      );
    });
  };

  return (
    <>
      <NavBar />
      <Grid container spacing={2} style={{ padding: "20px " }}>
        {getTypes()}
        <Grid item style={{ padding: "20px" }}>
          <Button size="small" variant="outlined" color="primary" onClick={""}>
            Add Type
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ManageTypes;
