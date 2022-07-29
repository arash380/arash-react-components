import PropTypes from "prop-types";
import React from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import classes from "./Tabs.module.css";

const NUMBER_THRESHOLD = 9;

const Tabs = ({
  tabs,
  onChange,
  value,
  margin = "0px",
  activeBarHeight = "4px",
  activeBarColor = "#000",
  className,
  ...otherProps
}) => {
  const _onchange = (_, newVal) => {
    if (newVal === value) return;
    onChange(newVal);
  };

  return (
    <MuiTabs
      value={value}
      className={`${classes.root} ${className}`}
      onChange={_onchange}
      {...otherProps}
      classes={{ indicator: classes.indicator }}
      style={{
        "--tabs-margin": margin,
        "--tabs-bar-clr": activeBarColor,
        "--tabs-bar-height": activeBarHeight,
      }}
    >
      {tabs.map(({ title, number }) => (
        <Tab
          label={title}
          key={title}
          classes={{ selected: classes.selected }}
          tab-number={number < 0 ? null : number > NUMBER_THRESHOLD ? `${NUMBER_THRESHOLD}+` : number}
        />
      ))}
    </MuiTabs>
  );
};

Tabs.propTypes = {
  activeBarColor: PropTypes.string,
  activeBarHeight: PropTypes.string,
  className: PropTypes.any,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.any,
};

export default Tabs;
