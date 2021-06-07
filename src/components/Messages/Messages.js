import React, { useState, useEffect } from "react";
import Message from "../Message";
import { listen } from "../../Firebase";
import "./Messages.css";

function Messages({ uname = "Saaketh" }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listen((snapshot) => {
      const msgs = [];
      snapshot.docs.forEach((msg) => {
        msgs.push({
          id: msg.id,
          ...msg.data(),
        });
      });
      setMessages(msgs);
      var objDiv = document.getElementById("messages");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  }, []);

  return (
    <div className="Messages" id="messages">
      {messages.map((message) => {
        return (
          <Message right={message.uname === uname} uname={message.uname}>
            {message.message}
          </Message>
        );
      })}
    </div>
  );
}

export default Messages;
