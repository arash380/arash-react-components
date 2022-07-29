import PropTypes from "prop-types";
import React from "react";
import Input from "../Input/Input";
import { Icon } from "@iconify/react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ type = "text", placeholder, onTextChange, handleEnter, className, ...otherProps }) => (
  <div className={`${classes.root} ${className}`}>
    <Input
      type={type}
      placeholder={placeholder}
      onTextChange={onTextChange}
      handleEnter={handleEnter}
      {...otherProps}
    />
    <Icon icon="fe:search" className={classes.icon} onClick={handleEnter} />
  </div>
);

SearchBar.propTypes = {
  className: PropTypes.any,
  handleEnter: PropTypes.func,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default SearchBar;
