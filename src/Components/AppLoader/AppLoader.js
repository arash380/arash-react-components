import React from "react";
import { PropagateLoader } from "react-spinners";
import { DEFAULT_THEME } from "../ThemeProvider/ThemeProvider";
import classes from "./AppLoader.module.css";

// TODO: get a different type of the loader from outside
const AppLoader = ({ color = DEFAULT_THEME.colors.primary }) => (
  <div className={classes.root}>
    <PropagateLoader color={color} />
  </div>
);

export default AppLoader;
