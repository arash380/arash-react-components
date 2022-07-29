import PropTypes from "prop-types";
import React from "react";
import classes from "./TextArea.module.css";

const TextArea = ({ placeholder, placeholderColor = "#989898", className, onTextChange, ...otherProps }) => (
  <textarea
    className={`${classes.root} ${className}`}
    placeholder={placeholder}
    style={{ "--text-area-placeholder-color": placeholderColor }}
    onChange={(e) => onTextChange(e.target.value)}
    {...otherProps}
  />
);

TextArea.propTypes = {
  className: PropTypes.any,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
};

export default TextArea;
