import { Button, Grid } from "@mui/material";
import React from "react";
import NavBar from "../NavBar";
import ObjectFields from "./ObjectFields";

function index(props) {
  let chainSawObjects = [
    { Name: "", Title: "", Grade: "asdas", "Bar Length": "12", Date: "" },
    { Name: "", Title: "", Grade: "asdas", "Bar Length": "12", Date: "" },
    { Name: "", Title: "", Grade: "asdas", "Bar Length": "12", Date: "" },
  ];

  return (
    <>
      <NavBar />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {chainSawObjects.map((data) => {
          return (
            <ObjectFields
              labels={Object.keys(data)}
              values={Object.values(data)}
            />
          );
        })}
        <Grid item xs={12} md={6} lg={3} style={{ padding: "20px" }}>
          <Button size="small" variant="outlined" color="primary" onClick={""}>
            Add Item
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default index;
