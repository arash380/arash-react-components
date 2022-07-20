import React from "react";
import PropTypes from "prop-types";
import classes from "./Backdrop.module.css";

const Backdrop = ({ show, onClick }) => show && <div className={classes.Backdrop} onClick={onClick}></div>;

Backdrop.propTypes = {
  show: PropTypes.func.isRequired,
  onClick: PropTypes.bool,
};

export default Backdrop;
