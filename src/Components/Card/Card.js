import React from "react";
import PropTypes from "prop-types";
import classes from "./Card.module.css";

const Card = ({ children, title = "", className, ...otherProps }) => {
  return (
    <div className={`${classes.root} ${className}`} {...otherProps}>
      {title && <p className={classes.title}>{title}</p>}
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  title: PropTypes.string,
};

export default Card;
