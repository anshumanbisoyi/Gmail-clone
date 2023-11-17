import { Grid } from "@mui/material";
import React from "react";
import Leftpanel from "./Leftpanel";
import Navbar from "./Navbar";
import Middle from "./Middle";
import RightPanel from "./Rightpanell";
import Footer from "./Footer";
import LeftPanelShrinked from "./LeftPanelShrinked";

function Main() {
   const [menu, setMenu] = React.useState(false);
   const handleMenu = () => {
     setMenu(!menu);
     console.log(menu);
   };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar menu={menu} handleMenu={handleMenu} />
        </Grid>
        <Grid item xs={2}>
         {menu? (<LeftPanelShrinked/>):(<Leftpanel/>)} 
        </Grid>
        <Grid item xs={9}>
          <Middle menu={menu} />
        </Grid>
        <Grid item xs={1}>
          <RightPanel />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
