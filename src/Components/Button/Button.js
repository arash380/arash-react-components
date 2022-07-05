import React from "react";
import { Button as MuiButton, CircularProgress } from "@material-ui/core";
import colors from "../../config/colors";
import classes from "./Button.module.css";

const Button = ({
  children,
  onClick,
  color = "default",
  hasLoader,
  className,
  loaderClassName,
  borderRadius = 10,
  isVisible = true,
  ...otherProps
}) => {
  let styles = { borderRadius: `${borderRadius}px` };
  if (color !== "default") {
    styles = {
      backgroundColor: colors[color],
      color: colors.white,
      borderRadius: `${borderRadius}px`,
    };
  }

  if (!isVisible) return null;
  return (
    <MuiButton
      className={`${classes.root} ${classes[color]} ${className}`}
      disabled={hasLoader}
      onClick={onClick}
      style={styles}
      {...otherProps}
    >
      {hasLoader ? <CircularProgress className={`${classes.spinner} ${loaderClassName}`} /> : children}
    </MuiButton>
  );
};

export default Button;
