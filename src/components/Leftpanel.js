import React from "react";
import pen from "../images/pen.png";
import inbox from "../images/inbox.png";
import send from "../images/send.png";
import snooze from "../images/snooze.png";
import star from "../images/star.png";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Leftpanel() {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        paddingTop: "1vw",
      }}
    >
      <div
        style={{
          height: "4.5vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#BEE0FF",
        }}
      >
        <img
          alt="pen-img"
          src={pen}
          style={{ width: "1.2vw", marginLeft: "2vw" }}
        />
        <h4
          style={{
            marginLeft: "1vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Compose
        </h4>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InboxIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{
            marginLeft: "1.6vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          alt="pen-img"
          src={star}
          style={{ width: "1.2vw", marginLeft: "2vw" }}
        />
        <span
          style={{
            marginLeft: "1.6vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          alt="pen-img"
          src={snooze}
          style={{ width: "1.2vw", marginLeft: "2vw" }}
        />
        <span
          style={{
            marginLeft: "1.6vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          alt="pen-img"
          src={send}
          style={{ width: "1.2vw", marginLeft: "2vw" }}
        />
        <span
          style={{
            marginLeft: "1.6vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Sent
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InsertDriveFileOutlinedIcon
          sx={{ width: "1.2vw", marginLeft: "2vw" }}
        />
        <span
          style={{
            marginLeft: "1.6vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Drafts
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <KeyboardArrowDownIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{
            marginLeft: "1.6vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          More
        </span>
      </div>
    </div>
  );
}

export default Leftpanel;
