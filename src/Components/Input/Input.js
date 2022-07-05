import React from "react";
import classes from "./Input.module.css";

const Input = ({ placeholder, placeholderColor = "#989898", handleEnter, className, ...otherProps }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && handleEnter) handleEnter();
  };

  return (
    <input
      className={`${classes.root} ${className}`}
      placeholder={placeholder}
      style={{ "--input-placeholder-color": placeholderColor }}
      onKeyDown={handleKeyDown}
      {...otherProps}
    />
  );
};

export default Input;
