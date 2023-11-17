import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GmailLogo from "../images/gmaillogo.png";
import { Avatar, Grid } from "@mui/material";
import lens from "../images/lens.png";
import { auth } from "../firebase/setup";
import Profile from "./Profile";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AppsIcon from "@mui/icons-material/Apps";

export default function Navbar() {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            position: "fixed",
            top: "0",
            zIndex: "2",
            backgroundColor: "#F9F9F9",
            minHeight: "5vw",
            minWidth: "100vw",
            paddingTop: "7px",
            paddingRight: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: "0.8vw", color: "#3C3C3C", marginLeft: "1vw" }}
                >
                  <MenuIcon sx={{ width: "2vw" }} />
                </IconButton>
                <img
                  alt="gmail-logo"
                  style={{ width: "2.3vw" }}
                  src={GmailLogo}
                />
                <Typography
                  sx={{ marginLeft: "1vw", fontSize: "1.8vw" }}
                  variant="h6"
                  color="#3C3C3C"
                  component="div"
                >
                  Gmail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div
                style={{
                  marginLeft: "3vw",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  width: "55vw",
                  height: "3.7vw",
                }}
              >
                <img
                  alt="lens-img"
                  src={lens}
                  style={{
                    width: "1.3vw",
                    height: "1.3vw",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                />
                <input
                  placeholder="Search mail"
                  style={{
                    width: "45vw",
                    height: "3vw",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                    borderRadius: "30px",
                    marginLeft: "1vw",
                    fontSize: "1vw",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <HelpOutlineIcon
                sx={{
                  width: "1.8vw",
                  height: "1.8vw",
                  alignItems: "center",
                  marginLeft: "14.5vw",
                  color: "grey",
                //   paddingLeft: "0px",
                }}
              />
              <SettingsOutlinedIcon
                sx={{
                  width: "1.8vw",
                  height: "1.8vw",
                  alignItems: "center",
                  marginLeft: "0.5vw",
                  color: "grey",
                //   paddingLeft: "10px",
                }}
              />
              <AppsIcon
                sx={{
                  width: "1.8vw",
                  height: "1.8vw",
                  alignItems: "center",
                  marginLeft: "0.5vw",
                  color: "grey",
                //   paddingLeft: "10px",
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Profile />
            </Grid>
          </div>
        </AppBar>
      </Box>
    </Grid>
  );
}
