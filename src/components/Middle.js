import { Button, Checkbox, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import start from "../images/star.png";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InboxIcon from "@mui/icons-material/Inbox";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Middle(props) {
  const menuState = props.menu;
  return (
    <div
      style={{
        marginLeft: menuState ? "0vw" : "-10vw",
        width: menuState ? "81vw" : "90vw",
        paddingTop: "6vw",
      }}
    >
      <Checkbox
        sx={{
          width: "1.5vw",
          height: "1.5vw",
          marginLeft: "1vw",
          marginTop: "-1vw",
          marginBottom: "0.5vw",
        }}
      />
      <RefreshIcon
        sx={{
          width: "1.5vw",
          height: "1.5vw",
          marginLeft: "1vw",
          marginTop: "1vw",
          marginBottom: "0.5vw",
        }}
      />
      <MoreVertIcon
        sx={{
          width: "1.5vw",
          height: "1.5vw",
          marginLeft: "1vw",
          marginTop: "1vw",
          marginBottom: "0.5vw",
        }}
      />
      <span style={{ marginLeft: "65vw", fontSize: "0.8vw", marginBottom:"1vw" }}>
        1-50 of 711 &nbsp;
      </span>
        {/* <KeyboardArrowLeftIcon sx={{ width: "1.3vw", marginTop: "10px", border:"1px red solid" }} />
        <KeyboardArrowRightIcon sx={{ width: "1.3vw", paddingTop: "10px", marginLeft:"1vw" }} /> */}
      
      <br />
      <Button
        variant="text"
        sx={{
          width: "14vw",
          borderBottom: "2px #0957D0 solid",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          color: "#0957D0",
          paddingRight: "6.2vw",
        }}
      >
        <InboxIcon
          sx={{ marginRight: "0.8vw", width: "1.2vw", height: "1.2vw" }}
        />
        <Typography
          sx={{ fontFamily: "Arial", textTransform: "none", fontSize: "1.1vw" }}
        >
          Primary
        </Typography>
      </Button>
      <Button
        variant="text"
        sx={{
          width: "14vw",
          // borderBottom: "2px green solid",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          color: "grey",
          paddingRight: "6.2vw",
        }}
      >
        <SellOutlinedIcon
          sx={{ marginRight: "0.8vw", width: "1.2vw", height: "1.2vw" }}
        />
        <Typography
          sx={{ fontFamily: "Arial", textTransform: "none", fontSize: "1.1vw" }}
        >
          Promotions
        </Typography>
      </Button>
      <Button
        variant="text"
        sx={{
          width: "14vw",
          // borderBottom: "2px #E2AF31 solid",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          // color: "#E2AF31",
          color: "grey",
          paddingRight: "6.2vw",
        }}
      >
        <PeopleAltOutlinedIcon
          sx={{ marginRight: "0.8vw", width: "1.2vw", height: "1.2vw" }}
        />
        <Typography
          sx={{ fontFamily: "Arial", textTransform: "none", fontSize: "1.1vw" }}
        >
          Social
        </Typography>
      </Button>

      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderTop: "1px solid #EFEFEF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
          <Checkbox style={{ width: "1vw", height: "1vw" }} />
          <img
            src={start}
            alt="star"
            style={{ marginLeft: "1vw", width: "1vw", height: "1vw" }}
          />
          <span
            style={{
              fontSize: "1.1vw",
              marginLeft: "1vw",
              fontWeight: "500",
            }}
          >
            hgdjsfsdbgsjdbg
            <span
              style={{
                fontSize: "1vw",
                marginLeft: "12vw",
                fontWeight: "200",
              }}
            >
              safejg
            </span>
          </span>
        </ListItem>
      </Paper>

      <h6
        style={{ fontWeight: "300", marginLeft: "30vw", marginBottom: "3vw" }}
      >
        Terms · Privacy · Program Policies
      </h6>
    </div>
  );
}

export default Middle;
