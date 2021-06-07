import React from "react";
import "./Message.css";

function Message({
  children,
  right,
  uname = "Unknown user",
  time = "00:00",
  date = "3 Jan, 2020",
}) {
  return (
    <React.Fragment className={right && "Message__Right"}>
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
        <div className={`Message__day ${right && "Message__day__right"}`}>
          {date}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Message;
