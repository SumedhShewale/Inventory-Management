import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [selectedHeader, setSelectedHeader] = useState(
    window.location.pathname || "/"
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
        // centered
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab
          label="All"
          value="/all"
          // disabled={props.header === "/"}
          component={Link}
          to="/all"
        />
        <Tab
          label="BullDozers"
          value="/bullDozers"
          // disabled={props.header === "/aboutUs"}
          component={Link}
          to="/bullDozers"
        />
        <Tab
          label="Chainsaws"
          value="/chainsaws"
          // disabled={props.header === "/gallery"}
          component={Link}
          to="/chainsaws"
        />
        <Tab
          label="Manage Types"
          value="/manageTypes"
          // disabled={props.header === "/gallery"}
          component={Link}
          to="/manageTypes"
        />
      </Tabs>
    </Paper>
  );
}

export default NavBar;
