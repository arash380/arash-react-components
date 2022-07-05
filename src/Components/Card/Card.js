import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, title = "", className, ...otherProps }) => {
  return (
    <div className={`${classes.root} ${className}`} {...otherProps}>
      {title && <p className={classes.title}>{title}</p>}
      {children}
    </div>
  );
};

export default Card;
