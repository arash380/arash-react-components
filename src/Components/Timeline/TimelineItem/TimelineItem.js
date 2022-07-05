import React from "react";
import moment from "moment";
import classes from "./TimelineItem.module.css";

const TimelineItem = ({ title, description, createdDate, color, lastNode = false }) => {
  return (
    <div className={classes.root} style={{ "--timeline-item-color": color }}>
      <span>{moment(createdDate).fromNow()}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {!lastNode && <div className={classes.line} />}
    </div>
  );
};

export default TimelineItem;
