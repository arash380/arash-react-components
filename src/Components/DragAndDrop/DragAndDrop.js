import React, { useState } from "react";
import { toast } from "react-toastify";
import { DRAG_KEY } from "../Draggable/Draggable";
import classes from "./DragAndDrop.module.css";

let dragCounter = 0;

const DragAndDrop = ({ children, handleDrop: handleDropExternal }) => {
  const [dragging, setDragging] = useState(false);

  const preventDefaultEventBehavior = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragOver = (e) => preventDefaultEventBehavior(e);

  const handleDragIn = (e) => {
    preventDefaultEventBehavior(e);

    dragCounter++;

    setDragging(true);
  };

  const handleDragOut = (e) => {
    preventDefaultEventBehavior(e);

    dragCounter--;
    if (dragCounter === 0) setDragging(false);
  };

  const handleDrop = (e) => {
    preventDefaultEventBehavior(e);
    setDragging(false);

    // Item is coming from the file manager page
    const fileInfoStr = e.dataTransfer.getData(DRAG_KEY);
    if (fileInfoStr !== "") {
      const fileInfo = JSON.parse(fileInfoStr);
      handleDropExternal([fileInfo]);
      dragCounter = 0;
    }

    // Item is coming from the user's machine
    const items = e.dataTransfer.files;
    if (items && items.length > 0) {
      const res = _filterFiles(items);
      handleDropExternal(res);
      dragCounter = 0;
    }

    e.dataTransfer.clearData();
  };

  const _filterFiles = (files) => {
    const filesArr = Array.from(files);
    const result = filesArr.filter(({ type }) => type !== "");

    // checking if at least on file is not acceptable
    if (filesArr.some(({ type }) => type === ""))
      toast.error("At least one of the uploaded files are not accepted.");

    return result;
  };

  return handleDropExternal ? (
    <div
      className={classes.root}
      onDragEnter={(e) => handleDragIn(e)}
      onDragLeave={(e) => handleDragOut(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      {dragging && <div className={classes.dragging} />}
      {children}
    </div>
  ) : (
    children
  );
};

export default DragAndDrop;
