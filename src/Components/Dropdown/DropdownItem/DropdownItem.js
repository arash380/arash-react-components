import PropTypes from "prop-types";
import React from "react";
import { Icon } from "@iconify/react";
import classes from "./DropdownItem.module.css";

const DropdownItem = ({ title, IconSrc, onClick, setShow, iconType, component, isUppercase }) => {
  const handleClick = (e) => {
    e.stopPropagation();

    if (!onClick) return;
    setShow(false);
    onClick();
  };

  let renderedIcon = null;
  if (IconSrc) {
    if (iconType === "mui") renderedIcon = <IconSrc className={classes.muiIcon} />;
    else renderedIcon = <Icon icon={IconSrc} className={classes.iconifyIcon} />;
  }

  return (
    <div className={classes.root} style={onClick ? { cursor: "pointer" } : {}} onClick={handleClick}>
      {renderedIcon}
      <p>{isUppercase ? title.toUpperCase() : title}</p>
      {component}
    </div>
  );
};

DropdownItem.propTypes = {
  IconSrc: PropTypes.any,
  component: PropTypes.any,
  iconType: PropTypes.oneOf[("mui", "iconify")],
  isUppercase: PropTypes.bool,
  onClick: PropTypes.func,
  setShow: PropTypes.func,
  title: PropTypes.string,
};

export default DropdownItem;
