import React from "react";
import { Search } from "@material-ui/icons";
import Input from "../Input/Input";
import classes from "./SearchBar.module.css";

const SearchBar = ({ type = "text", placeholder, onChange, className }) => {
  return (
    <div className={`${classes.root} ${className}`}>
      <Input type={type} placeholder={placeholder} onChange={onChange} placeholderColor="#aaa" />
      <Search className={classes.icon} />
    </div>
  );
};

export default SearchBar;
