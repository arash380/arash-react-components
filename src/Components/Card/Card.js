import React from "react";
import PropTypes from "prop-types";
import classes from "./Card.module.css";

const Card = ({ children, title = "", onClick, className, ...otherProps }) => {
  return (
    <div
      className={`${classes.root} ${onClick && classes.onClick} ${className}`}
      onClick={onclick}
      {...otherProps}
    >
      {title && <p className={classes.title}>{title}</p>}
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
