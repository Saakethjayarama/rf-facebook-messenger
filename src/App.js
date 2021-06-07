import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import "./App.css";
import Messages from "./components/Messages";

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

  return (
    <div className="App">
      {/* Messenger Icon */}
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?h=100&w=100" />
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
        <form>
          <div className={classes.AppFormContainer}>
            <TextField
              id="standard-basic"
              placeholder="Enter Message..."
              className={classes.tfMessage}
            />
            <Button className={classes.sendBtn}>
              <Send />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
