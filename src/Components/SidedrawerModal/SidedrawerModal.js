import PropTypes from "prop-types";
import React from "react";
import { Icon } from "@iconify/react";
import Backdrop from "../Backdrop/Backdrop";
import { useMediaQuery, useTheme } from "@mui/material";
import classes from "./SidedrawerModal.module.css";

const DEFAULT_WIDTH = "50vw";
const MOBILE_WIDTH = "97vw";

const SidedrawerModal = ({
  show,
  closeModal,
  children,
  className,
  width = DEFAULT_WIDTH,
  hasCloseButton = true,
  hasBackdrop = true,
}) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {hasBackdrop && <Backdrop show={show} onClick={closeModal} />}
      <div
        className={`${classes.root} ${show && classes.show} ${className}`}
        style={{
          "--sidedrawer-modal-width": smallScreen ? MOBILE_WIDTH : width,
        }}
      >
        {hasCloseButton && <Icon icon="ci:close-big" className={classes.closeButton} onClick={closeModal} />}
        {children}
      </div>
    </>
  );
};

SidedrawerModal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  closeModal: PropTypes.func,
  hasBackdrop: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  show: PropTypes.bool,
  width: PropTypes.string,
};

export default SidedrawerModal;
