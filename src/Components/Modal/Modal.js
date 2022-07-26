import PropTypes from "prop-types";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Icon } from "@iconify/react";
import classes from "./Modal.module.css";

const Modal = ({ show, closeModal, hasCloseButton = true, hasBackdrop = true, children, className }) => (
  <>
    {hasBackdrop && <Backdrop show={show} onClick={closeModal} />}
    <div
      className={`${classes.root} ${className}`}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div>{children}</div>
      {hasCloseButton && <Icon icon="ci:close-big" className={classes.closeButton} onClick={closeModal} />}
    </div>
  </>
);

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  closeModal: PropTypes.func,
  hasBackdrop: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  show: PropTypes.bool,
};

export default Modal;
