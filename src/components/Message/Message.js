import React from "react";
import "./Message.css";

function Message({ children, right, uname = "Unknown user", time = "00:00" }) {
  return (
    <div className={`Message ${right && "Right__Message"}`}>
      {!right && (
        <>
          <div className="Message__uname">{uname}</div>
        </>
      )}
      {children}
      <>
        <div className={`Message__time ${right && "Message__time__right"}`}>
          {time}
        </div>
      </>
    </div>
  );
}

export default Message;
