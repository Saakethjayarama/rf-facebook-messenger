import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import { sendMessage } from "./Firebase";

const useStyle = makeStyles((theme) => ({
  heading: {
    margin: theme.spacing(1),
  },
  muted: {
    color: "#C2D7D0",
  },
  AppFormContainer: {
    display: "flex",
    width: "90%",
    margin: "auto",
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
  const [uname, setUname] = useState("");

  useEffect(() => {
    let name;
    while (!name) {
      name = prompt("Enter your name");
    }
    setUname(name);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    sendMessage({ message, time_stamp: new Date(), uname: "Saaketh" });
  };
  const isDisabled = !message ? true : false;

  return (
    <div className="App">
      <Header />
      {/* Welcome $USERNAME */}
      <Typography variant="p" className={classes.muted}>
        Welcome {uname}
      </Typography>
      {/* Messages */}
      <Messages uname={uname} />

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
