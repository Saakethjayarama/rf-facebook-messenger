import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState, useEffect } from "react";
import "./App.css";
import Messages from "./components/Messages";
import { sendMessage, listen } from "./Firebase";

const useStyle = makeStyles((theme) => ({
  heading: {
    margin: theme.spacing(1),
  },
  muted: {
    color: "#C2D7D0",
  },
  AppFormContainer: {
    display: "flex",
    width: "100%",
  },
  sendBtn: {
    color: "#007FFF",
    flex: 0,
  },
  tfMessage: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyle();

  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    sendMessage({ message, time_stamp: new Date(), uname: "Saaketh" });
  };
  const isDisabled = !message ? true : false;

  return (
    <div className="App">
      {/* Messenger Icon */}
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?h=100&w=100"
        alt="Messenger logo"
      />
      {/* Messenger App */}
      <Typography variant="h3" className={classes.heading}>
        Dev Messenger
      </Typography>
      {/* Welcome $USERNAME */}
      <Typography variant="p" className={classes.muted}>
        Welcome Saaketh
      </Typography>
      {/* Messages */}
      <Messages />

      {/* Form */}
      <div className="App__Form">
        <form onSubmit={handleSubmit}>
          <div className={classes.AppFormContainer}>
            <TextField
              id="standard-basic"
              placeholder="Enter Message..."
              className={classes.tfMessage}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button
              className={classes.sendBtn}
              disabled={isDisabled}
              type="submit"
            >
              <Send />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
