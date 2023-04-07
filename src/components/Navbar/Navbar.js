import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "./consts/navbarItems";
import { navbarStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      {/* We are also adding styles to the Drawer component from our styles.js file*/}
      {/* a Drawer is a sidebar component that is anchored to the left */}
      <Toolbar /> {/* the toolbar adds a structure for adding elements */}
      <Divider />{" "}
      {/* A divider is a thin line that groups content in lists and layouts. */}
      <List>
        {" "}
        {/* Lists are continuous, vertical indexes of text or images. */}
        {mainNavbarItems.map((item, index) => (
          <ListItem button key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItem>
        ))}
      </List>
      {/* we are looping thru. the navbar item objects and inserting data into the ListItem component and other components */}
    </Drawer>
  );
};

export default Navbar;
