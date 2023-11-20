import PropTypes from "prop-types";
import React from "react";
import { DEFAULT_THEME } from "../ThemeProvider/ThemeProvider";
import classes from "./Switch.module.css";

const DEFAULT_DETAILS = [
  {
    color: DEFAULT_THEME.colors.secondary,
    text: "Enabled",
  },
  {
    color: DEFAULT_THEME.colors.primary,
    text: "Disabled",
  },
];

const Switch = ({
  checked,
  onChange,
  details = DEFAULT_DETAILS,
  thumbColor = DEFAULT_THEME.colors.white,
  disabled,
  className,
  ...otherProps
}) => (
  <div
    className={`${classes.root} ${!checked && classes.inactive} ${disabled && classes.disabled} ${className}`}
    onClick={() => onChange(disabled ? checked : !checked)}
    style={{
      "--switch-main-color": details[checked ? 0 : 1].color,
      "--switch-thumb-color": thumbColor,
    }}
    {...otherProps}
  >
    <span>{details[checked ? 0 : 1].text}</span>
    <div className={classes.thumb} />
  </div>
);

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.any,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  disabled: PropTypes.any,
  onChange: PropTypes.func,
  thumbColor: PropTypes.string,
};

export default Switch;
