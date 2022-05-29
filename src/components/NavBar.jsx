import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectObjectsTypes } from "../features/counter/counterSlice";

function NavBar(props) {
  let types = useSelector(selectObjectsTypes);

  const [selectedHeader, setSelectedHeader] = useState(
    window.location.pathname || "/all"
  );

  const handleChange = (event, newValue) => {
    setSelectedHeader(newValue);
  };

  return (
    <Paper square={true}>
      <Tabs
        value={selectedHeader}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab label="All" value="/all" component={Link} to="/all" />
        {types.map((typeData) => {
          return (
            <Tab
              label={typeData.title}
              value={"/" + typeData.type}
              component={Link}
              to={"/" + typeData.type}
            />
          );
        })}
        <Tab
          label="Manage Types"
          value="/manageTypes"
          component={Link}
          to="/manageTypes"
        />
      </Tabs>
    </Paper>
  );
}

export default NavBar;
