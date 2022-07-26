import PropTypes from "prop-types";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ show, closeModal, hasBackdrop = true, children, className }) => (
  <>
    {hasBackdrop && <Backdrop show={show} onClick={closeModal} />}
    <div
      className={`${classes.Modal} ${className}`}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {children}
    </div>
  </>
);

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  closeModal: PropTypes.func,
  hasBackdrop: PropTypes.bool,
  show: PropTypes.bool,
};

export default Modal;
