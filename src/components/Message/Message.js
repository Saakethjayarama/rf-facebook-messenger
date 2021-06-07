import React from "react";
import "./Message.css";

function Message({ children, right, uname, time }) {
  return (
    <div className={`Message ${right && "Right__Message"}`}>{children}</div>
  );
}

export default Message;
