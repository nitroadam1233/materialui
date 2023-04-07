import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container>
      {/* The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts */}
      <Navbar /> {/* This is our navbar component that we created */}
      <Outlet />
      {/* An <Outlet> should be used in parent route elements to render 
                    their child route elements. 
                    This allows nested UI to show up when child routes are rendered. 
                    If the parent route matched exactly, it will render a child index route or 
                    nothing if there is no index route. 
                  */}
    </Grid>
  );
}

export default App;
