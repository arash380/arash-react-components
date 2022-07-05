import React from "react";
import moment from "moment";
import colors from "../../../config/colors";
import UserAvatar from "../../UserAvatar/UserAvatar";
import classes from "./Message.module.css";

const Message = ({
  name,
  message,
  timestamp,
  color = colors.primary,
  right = false,
  fullWidth = false,
  isFromThisUser = false,
  avatar,
}) => {
  return (
    <div className={`${classes.root} ${right && classes.right} ${fullWidth && classes.fullWidth}`}>
      <UserAvatar
        customUser={{ firstName: name?.split(" ")[0], lastName: name?.split(" ")[1] }}
        color={color}
        textColor={color === colors.tertiary ? colors.primary : colors.white}
        size="45"
        src={avatar ? avatar : null}
      />
      <div>
        <h4>{`${name} ${isFromThisUser ? "(You)" : ""}`}</h4>
        {/* Message can be a string or a file */}
        {typeof message === "string" ? (
          <p>{message}</p>
        ) : (
          <a href={message.dataFilePath} target="_blank" rel="noreferrer">
            {message.fileName}
          </a>
        )}
        <span>{moment(timestamp).format("h:mm, MMM DD YYYY")}</span>
      </div>
    </div>
  );
};

export default Message;
