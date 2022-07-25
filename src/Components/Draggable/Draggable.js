import PropTypes from "prop-types";
import React, { useState } from "react";
import classes from "./Draggable.module.css";

export const DRAG_KEY = "drag-item";

const Draggable = ({ children, isEnabled = true, dragData }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData(DRAG_KEY, JSON.stringify(dragData));

    setIsDragging(true);
  };

  const handleDragEnd = () => setIsDragging(false);

  if (!isEnabled) return children;
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`${isDragging && classes.dragging}`}
    >
      {children}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.any,
  dragData: PropTypes.any,
  isEnabled: PropTypes.bool,
};

export default Draggable;
