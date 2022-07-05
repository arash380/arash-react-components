import React from "react";
import classes from "./TextArea.module.css";

const TextArea = ({ placeholder, placeholderColor = "#989898", ...otherProps }) => {
  return (
    <textarea
      className={classes.root}
      placeholder={placeholder}
      style={{ "--text-area-placeholder-color": placeholderColor }}
      {...otherProps}
    />
  );
};

export default TextArea;
