import { Grid } from "@mui/material";
import React from "react";
import Leftpanel from "./Leftpanel";
import Navbar from "./Navbar";
import Middle from "./Middle";
import RightPanel from "./Rightpanell";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <Leftpanel />
        </Grid>
        <Grid item xs={9}>
          <Middle />
        </Grid>
        <Grid item xs={1}>
          <RightPanel />
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
