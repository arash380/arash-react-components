import React, { useEffect, useState } from "react";
import { Close, DoubleArrow } from "@material-ui/icons";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./SidedrawerModal.module.css";

const SidedrawerModal = ({
  show,
  closeModal,
  children,
  hasCloseButton = true,
  width = "50vw",
  padding = "27",
  hasShrinkButton = false,
}) => {
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    if (!hasShrinkButton) return;
    const rootElement = document.querySelector(":root");
    if (isShrinking) {
      rootElement.style.setProperty("--shrunk-width", show ? width : "0px");
    } else {
      rootElement.style.setProperty("--shrunk-width", "0px");
    }
  }, [isShrinking, hasShrinkButton, show, width]);

  return (
    <>
      {!isShrinking && <Backdrop show={show} onClick={closeModal} />}
      <div
        className={`${classes.root} ${show && classes.show}`}
        style={{
          "--sidedrawer-modal-width": width,
          "--sidedrawer-modal-padding": `${padding}px`,
        }}
      >
        {hasCloseButton && <Close className={classes.closeIcon} onClick={closeModal} />}
        {hasShrinkButton && (
          <div className={classes.shrinkContainer} onClick={() => setIsShrinking((prevValue) => !prevValue)}>
            <DoubleArrow className={`${classes.shrinkIcon} ${isShrinking && classes.rotate}`} />
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default SidedrawerModal;
