import React, { useState, useEffect } from "react";
import Message from "../Message";
import { listen } from "../../Firebase";
import "./Messages.css";

const getMonth = (month) => {
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return;
  }
};

const getTime = (str) => {
  if (str.length === 1) return "0" + str;
  return str;
};

function Messages({ uname = "Saaketh" }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listen((snapshot) => {
      const msgs = [];
      snapshot.docs.forEach((msg) => {
        const { uname, message, time_stamp } = msg.data();

        // Date and Time
        const seconds = time_stamp.seconds;
        const dt = new Date(0);
        dt.setUTCSeconds(seconds);

        // console.log(dt);

        const month = getMonth(dt.getMonth() + 1);
        const year = dt.getFullYear();
        const day = dt.getDate();

        const date = `${day} ${month}, ${year}`;
        const time = `${getTime(dt.getHours())}:${getTime(dt.getMinutes())}`;

        msgs.push({
          id: msg.id,
          uname,
          message,
          date,
          time,
        });
      });
      setMessages(msgs);
    });
  }, []);

  return (
    <div className="Messages" id="messages">
      {messages.map((message) => {
        return (
          <Message
            right={message.uname === uname}
            uname={message.uname}
            date={message.date}
            time={message.time}
            key={message.id}
          >
            {message.message}
          </Message>
        );
      })}
    </div>
  );
}

export default Messages;
