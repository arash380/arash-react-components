import React from "react";
import { Tabs as MuiTabs, Tab, makeStyles } from "@material-ui/core";
import colors from "../../config/colors";
import classes from "./Tabs.module.css";

// If unread count is above 10, show 10+
const Tabs = ({
  labels,
  onChange,
  value,
  margin = "0px",
  activeBarHeight = "3",
  activeBarColor = colors.primary,
  className,
  ...otherProps
}) => {
  const useStyles = makeStyles(() => ({
    root: {
      "& .Mui-selected": {
        fontWeight: "bolder",
      },
    },
    indicator: {
      backgroundColor: activeBarColor,
      height: `${activeBarHeight}px`,
    },
  }));
  const tabsClasses = useStyles();

  return (
    <MuiTabs
      value={value}
      className={`${classes.root} ${className}`}
      onChange={onChange}
      {...otherProps}
      style={{ "--tabs-margin": margin }}
      classes={{ root: tabsClasses.root, indicator: tabsClasses.indicator }}
    >
      {labels.map(({ title, unread }) => (
        <Tab label={title} key={title} unread-count={unread === 0 ? null : unread} />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
