import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = ({ show, modalClosed, children, className }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
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
};

export default Modal;
