import PropTypes from "prop-types";
import React from "react";
import classes from "./Switch.module.css";

// TODO: colors
const DEFAULT_DETAILS = [
  {
    color: "#f57b20",
    text: "Enabled",
  },
  {
    color: "#2d3a47",
    text: "Disabled",
  },
];

const Switch = ({
  checked,
  onChange,
  details = DEFAULT_DETAILS,
  thumbColor = "white",
  disabled,
  className,
  ...otherProps
}) => (
  <div
    className={`${classes.root} ${!checked && classes.inactive} ${disabled && classes.disabled} ${className}`}
    onClick={() => onChange(disabled ? checked : !checked)}
    style={{
      "--switch-main-color": DEFAULT_DETAILS[checked ? 0 : 1].color,
      "--switch-thumb-color": thumbColor,
    }}
    {...otherProps}
  >
    <span>{DEFAULT_DETAILS[checked ? 0 : 1].text}</span>
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
