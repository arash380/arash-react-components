import React, { useRef, useEffect } from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import classes from "./Dropdown.module.css";

const Dropdown = ({ children, items, className, show, setShow }) => {
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
      {children}
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

export default Dropdown;
