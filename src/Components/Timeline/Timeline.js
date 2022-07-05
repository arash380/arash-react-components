import React from "react";
import TimelineItem from "./TimelineItem/TimelineItem";
import classes from "./Timeline.module.css";

const Timeline = ({ data, className }) => {
  return (
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
};

export default Timeline;
