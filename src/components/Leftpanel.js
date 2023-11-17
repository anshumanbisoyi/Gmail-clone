import React, { useState } from "react";
import send from "../images/send.png";
import snooze from "../images/snooze.png";
import star from "../images/star.png";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Message from "./Message";
import { Typography } from "@mui/material";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import ReportIcon from "@mui/icons-material/ReportOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Leftpanel() {
  const [moreClick, setMoreClick]=React.useState(false);
  const handleMoreClick = () => {
    setMoreClick(!moreClick);
  }
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        paddingTop: "6vw",
        width: "15vw",
      }}
    >
      <Message />
      <div
        style={{
          marginTop: "1vw",
          // marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#D0DEF9",
          padding: "5px",
          paddingRight: "15px",
          paddingLeft: "10px",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
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
        onClick={handleMoreClick}
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
      {moreClick && (
        <>
          <div
            style={{
              marginTop: "1vw",
              marginLeft: "0.8vw",
              width: "12vw",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LabelImportantOutlinedIcon
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
              Important
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
            <ChatIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
            <span
              style={{
                marginLeft: "1.6vw",
                marginRight: "1.6vw",
                fontWeight: "400",
                fontSize: "1vw",
              }}
            >
              Chats
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
            <AllInboxOutlinedIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
            <span
              style={{
                marginLeft: "1.6vw",
                marginRight: "1.6vw",
                fontWeight: "400",
                fontSize: "1vw",
              }}
            >
              All Mails
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
            <ScheduleSendIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
            <span
              style={{
                marginLeft: "1.6vw",
                marginRight: "1.6vw",
                fontWeight: "400",
                fontSize: "1vw",
              }}
            >
              Scheduled
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
            <ReportIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
            <span
              style={{
                marginLeft: "1.6vw",
                marginRight: "1.6vw",
                fontWeight: "400",
                fontSize: "1vw",
              }}
            >
              Spam
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
            <DeleteOutlineIcon sx={{ width: "1.2vw", marginLeft: "2vw" }} />
            <span
              style={{
                marginLeft: "1.6vw",
                marginRight: "1.6vw",
                fontWeight: "400",
                fontSize: "1vw",
              }}
            >
              Trash
            </span>
          </div>
        </>
      )}

      <Typography sx={{ marginLeft: "2.3vw", marginTop: "2vw" }}>
        Labels <span style={{ marginLeft: "7vw" }}>+</span>
      </Typography>
    </div>
  );
}

export default Leftpanel;
