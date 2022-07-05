import React, { useEffect, useRef } from "react";
import logo from "../../Assets/images/SimplyAsk Icon Color onTransparent.png";
import Scrollbars from "react-custom-scrollbars";
import colors from "../../config/colors";
import Message from "./Message/Message";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import classes from "./Conversation.module.css";

const MSG_SOURCES = {
  USER: "USER",
  DIALOGFLOW: "DIALOGFLOW",
  AGENT: "AGENT",
};

const Conversation = ({
  data,
  user,
  className,
  fullWidth = false,
  isConversationHistory = false,
  handleDropFile,
}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  useEffect(scrollToBottom, [data]);

  const getChatColor = (src) => {
    switch (src) {
      case MSG_SOURCES.USER:
        return colors.secondary;
      case MSG_SOURCES.DIALOGFLOW:
        return colors.tertiary;
      default:
        return colors.primary;
    }
  };

  return (
    <Scrollbars className={className} autoHide>
      <DragAndDrop handleDrop={handleDropFile}>
        <div className={classes.root} ref={messagesEndRef}>
          {isConversationHistory
            ? data.map(({ firstName, lastName, message, timestamp, right, color }, index) => (
                <Message
                  name={`${firstName} ${lastName}`}
                  message={message}
                  timestamp={timestamp}
                  key={index}
                  fullWidth={fullWidth}
                  color={color}
                  right={right}
                />
              ))
            : data.map(({ messageSource, message, transmissionTime }, index) => (
                <Message
                  name={message.contents.fromName}
                  message={message.contents.data}
                  timestamp={transmissionTime}
                  key={index}
                  fullWidth={fullWidth}
                  color={getChatColor(messageSource)}
                  isFromThisUser={message.contents.fromId === user.id}
                  avatar={
                    messageSource === MSG_SOURCES.DIALOGFLOW
                      ? logo
                      : message.contents.fromId === user.id
                      ? user.pfp
                      : null
                  }
                  // right
                />
              ))}
        </div>
      </DragAndDrop>
    </Scrollbars>
  );
};

export default Conversation;
