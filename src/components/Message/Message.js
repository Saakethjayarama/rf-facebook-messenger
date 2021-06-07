import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(
  (
    {
      children,
      right,
      uname = "Unknown user",
      time = "00:00",
      date = "3 Jan, 2020",
    },
    ref
  ) => {
    return (
      <div className={`Message  ${right && "Message__right"}`} ref={ref}>
        {!right ? <div className="Message__uname">{uname}</div> : null}
        <div
          className={`Message__container ${right && "Message__containerRight"}`}
        >
          {children}
          <div className="Message__date">{date}</div>
        </div>
        <div className="Message__time">{time}</div>
      </div>
    );
  }
);

export default Message;
