import React from "react";
import calendar from "../images/calendar.png";
import user from "../images/user.png";
import tasks from "../images/tasks.png";

function rightpanel() {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        position: "fixed",
        right: "0",
        width: "5vw",
      }}
    >
      <img
        alt="calendar-img"
        src={calendar}
        style={{ width: "1.4vw", padding: "2vw" }}
      />
      <br />
      <img
        alt="calendar-img"
        src={calendar}
        style={{ width: "1.4vw", padding: "2vw" }}
      />
      <br />
      <img
        alt="user-img"
        src={user}
        style={{ width: "1.4vw", padding: "2vw" }}
      />
      <br />
      <img
        alt="tasks-img"
        src={tasks}
        style={{ width: "1.4vw", padding: "2vw" }}
      />
    </div>
  );
}

export default rightpanel;
