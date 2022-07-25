import PropTypes from "prop-types";
import React, { useRef, useEffect, cloneElement } from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import classes from "./Dropdown.module.css";

const Dropdown = ({ ToggleComponent, items, className, show, setShow }) => {
  const dropdownRef = useRef();

  // Checks for click outside of the dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current.contains(e.target)) return;
      setShow(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [setShow]);

  return (
    <div ref={dropdownRef}>
      {cloneElement(ToggleComponent, { onClick: () => setShow((v) => !v) })}
      <div className={`${classes.root} ${show ? "" : classes.hidden} ${className}`}>
        {items.map(({ Icon, iconType, title, onClick, component, isUppercase }, index) => (
          <DropdownItem
            IconSrc={Icon}
            iconType={iconType}
            title={title}
            onClick={onClick}
            setShow={setShow}
            key={index}
            component={component}
            isUppercase={isUppercase}
          />
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  ToggleComponent: PropTypes.any.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      IconSrc: DropdownItem.propTypes.IconSrc,
      component: DropdownItem.propTypes.component,
      iconType: DropdownItem.propTypes.iconType,
      isUppercase: DropdownItem.propTypes.isUppercase,
      onClick: DropdownItem.propTypes.onClick,
      setShow: DropdownItem.propTypes.setShow,
      title: DropdownItem.propTypes.title,
    })
  ).isRequired,
  setShow: PropTypes.func,
  show: PropTypes.bool,
};

export default Dropdown;
