import React from "react";
import { Avatar } from "@material-ui/core";
import { getNameInitials } from "../../utils/helperFunctions";
import colors from "../../config/colors";
import classes from "./UserAvatar.module.css";

const UserAvatar = ({
  customUser,
  imgSrc,
  color = colors.primary,
  textColor,
  size = "65",
  className,
  ...otherProps
}) => {
  return (
    <Avatar
      style={{
        "--avatar-background-color": color,
        "--avatar-size": `${size}px`,
        "--avatar-text-color": textColor,
      }}
      className={`${classes.root} ${className}`}
      src={imgSrc ? imgSrc : null}
      {...otherProps}
    >
      {getNameInitials(customUser)}
    </Avatar>
  );
};
export default UserAvatar;
