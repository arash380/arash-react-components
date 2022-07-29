import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton, CircularProgress } from "@mui/material";
import classes from "./Button.module.css";

const Button = ({
  children,
  onClick,
  loading,
  className,
  loaderClassName,
  isVisible = true,
  ...otherProps
}) => {
  if (!isVisible) return null;
  return (
    <MuiButton
      variant="contained"
      disabled={loading}
      onClick={onClick}
      className={`${classes.root} ${className}`}
      {...otherProps}
    >
      {loading ? <CircularProgress className={`${classes.spinner} ${loaderClassName}`} /> : children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  isVisible: PropTypes.bool,
  loaderClassName: PropTypes.any,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
