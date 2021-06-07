import React, { useState } from "react";
import "./Header.css";
import { makeStyles, Typography } from "@material-ui/core";
import { deleteMessages } from "../../Firebase";

const useStyle = makeStyles((theme) => ({
  heading: {
    margin: theme.spacing(1),
  },
}));

function Header() {
  const classes = useStyle();

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("came in");
    setCount(count + 1);
    if (count >= 15) deleteMessages();
  };

  return (
    <div className="Header" onClick={handleClick}>
      {/* Messenger App */}
      <Typography variant="h3" className={classes.heading}>
        Messenger
      </Typography>
      {/* Messenger Icon */}
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?h=50&w=50"
        alt="Messenger logo"
      />
    </div>
  );
}

export default Header;
