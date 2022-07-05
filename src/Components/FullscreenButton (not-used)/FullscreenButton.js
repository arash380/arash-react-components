import React, { useState, useEffect } from "react";
import screenfull from "screenfull";
import classes from "./FullscreenButton.module.css";
import { useState } from "react";

// TODO: onclick should come from outside
const FullscreenButton = ({ fontSize, ...otherProps }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenAvailable, setFullscreenAvailable] = useState(true);

  useEffect(() => {
    setFullscreenAvailable(screenfull.isEnabled);
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        setFullscreen(screenfull.isFullscreen);
      });
    }
  }, []);

  const onClick = () => {
    screenfull.toggle();
  };

  if (!fullscreenAvailable) return null;

  return fullscreen ? (
    <FullscreenExit
      style={{ fontSize: fontSize }}
      className={classes.root}
      onClick={onClick}
      {...otherProps}
    />
  ) : (
    <Fullscreen style={{ fontSize: fontSize }} className={classes.root} onClick={onClick} {...otherProps} />
  );
};

export default FullscreenButton;
