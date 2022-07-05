import React from "react";
import classes from "./Screen.module.css";

const Screen = ({ children }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Screen;
