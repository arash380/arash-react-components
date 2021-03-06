import PropTypes from "prop-types";
import React from "react";
import TimelineItem from "./TimelineItem/TimelineItem";
import classes from "./Timeline.module.css";

const Timeline = ({ data, className }) => (
  <div className={`${classes.root} ${className}`}>
    {data.map(({ color, createdDate, description, title }, index) => (
      <TimelineItem
        color={color}
        createdDate={createdDate}
        description={description}
        title={title}
        key={index}
        lastNode={data.length - 1 === index}
      />
    ))}
  </div>
);

Timeline.propTypes = {
  className: PropTypes.any,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: TimelineItem.propTypes.color,
      createdDate: TimelineItem.propTypes.createdDate,
      description: TimelineItem.propTypes.description,
      title: TimelineItem.propTypes.title,
    })
  ).isRequired,
};

export default Timeline;
