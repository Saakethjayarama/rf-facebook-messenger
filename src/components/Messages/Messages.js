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
    });
  }, []);

  return (
    <div className="Messages">
      {messages.map((message) => {
        return (
          <Message right={message.uname == uname}>{message.message}</Message>
        );
      })}
      {/* <Message>corrupti eveniet beatae doloremque incidunt!</Message>
      <Message right>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad
        porro nemo saepe. Reprehenderit quibusdam error vero cumque doloremque
        me vitae perspiciatis alias aspernatur nesciunt consequuntur blanditiis
        facilis illum? Eius, iure? Non esse aliquid odit sunt odio. r magnam
        nesciunt magni veniam veritatis corrupti eveniet beatae doloremque
        incidunt!
      </Message>
      <Message right>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad
        porro nemo saepe. Reprehenderit quibusdam error vero cumque doloremque
        me vitae perspiciatis alias aspernatur nesciunt consequuntur blanditiis
        facilis illum? Eius, iure? Non esse aliquid odit sunt odio. r magnam
        nesciunt magni veniam veritatis corrupti eveniet beatae doloremque
        incidunt!
      </Message> */}
    </div>
  );
}

export default Messages;
