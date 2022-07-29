import PropTypes from "prop-types";
import React from "react";
import { DEFAULT_THEME } from "../ThemeProvider/ThemeProvider";
import classes from "./Input.module.css";

const Input = ({
  placeholder,
  placeholderColor = DEFAULT_THEME.colors.placeholder,
  onTextChange = () => {},
  handleEnter,
  className,
  ...otherProps
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && handleEnter) handleEnter();
  };

  return (
    <input
      className={`${classes.root} ${className}`}
      placeholder={placeholder}
      style={{ "--input-placeholder-color": placeholderColor }}
      onKeyDown={handleKeyDown}
      onChange={(e) => onTextChange(e.target.value)}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  className: PropTypes.any,
  handleEnter: PropTypes.func,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.any,
  placeholderColor: PropTypes.string,
};

export default Input;
