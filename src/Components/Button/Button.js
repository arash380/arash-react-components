import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton, CircularProgress } from "@mui/material";
import classes from "./Button.module.css";

const Button = ({
  children,
  onClick,
  hasLoader = false,
  className,
  loaderClassName,
  isVisible = true,
  ...otherProps
}) => {
  if (!isVisible) return null;
  return (
    <MuiButton
      className={`${classes.root} ${className}`}
      disabled={hasLoader}
      onClick={onClick}
      {...otherProps}
    >
      {hasLoader ? <CircularProgress className={`${classes.spinner} ${loaderClassName}`} /> : children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  hasLoader: PropTypes.bool,
  isVisible: PropTypes.bool,
  loaderClassName: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
