import React from "react";
import classes from "./TopMenuBar.module.css";

const TopMenuBar = ({ className, children }) => {
  return <div className={`${classes.root} ${className}`}>{children}</div>;
};

export default TopMenuBar;
