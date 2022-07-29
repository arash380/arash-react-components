import PropTypes from "prop-types";
import React from "react";
import moment from "moment";
import classes from "./TimelineItem.module.css";

const TimelineItem = ({ title, description, createdDate = new Date(), color = "#f57b20", lastNode }) => {
  return (
    <div className={classes.root} style={{ "--timeline-item-color": color }}>
      <span>{moment(createdDate).fromNow()}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {!lastNode && <div className={classes.line} />}
    </div>
  );
};

TimelineItem.propTypes = {
  color: PropTypes.string,
  createdDate: PropTypes.any,
  description: PropTypes.string,
  lastNode: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default TimelineItem;
