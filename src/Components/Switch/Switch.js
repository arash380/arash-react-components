import React from "react";
import { makeStyles, Switch as MuiSwitch } from "@material-ui/core";
import colors from "../../config/colors";

const Switch = ({ color = colors.primary, disabled, className, ...props }) => {
  const useStyles = makeStyles(() => ({
    root: {
      "& .Mui-checked": {
        color: color,
      },
      "& .Mui-checked + .MuiSwitch-track": {
        backgroundColor: color,
      },
    },
  }));
  const classes = useStyles();

  return (
    <MuiSwitch
      className={className}
      classes={{
        root: classes.root,
      }}
      color={!disabled ? "primary" : "default"}
      disabled={disabled}
      {...props}
    />
  );
};

export default Switch;
