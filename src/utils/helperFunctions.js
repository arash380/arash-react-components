import moment from "moment";
import colors from "../config/colors";
export const DEFAULT_RETURN_VALUE = "---";
export const OBJECT_WILD_CARD_KEY = ""; // returns the whole object

export const getFullName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

export const getNameInitials = (user, spaceBetween = false) => {
  if (!user.firstName && !user.lastName) return "";
  else if (!user.lastName && user.firstName.length === 1)
    return `${user.firstName[0]}${spaceBetween ? " " : ""}${user.firstName[0]}`;
  else if (!user.lastName) return `${user.firstName[0]}${spaceBetween ? " " : ""}${user.firstName[1]}`;
  return `${user.firstName[0]}${spaceBetween ? " " : ""}${user.lastName[0]}`;
};

export const getDayFromDateString = (str) => {
  const date = moment(str);
  return date.format("YYYY-MM-DD");
};

export const appendHashtag = (str, addSpace = true) => {
  if (addSpace) return `# ${str}`;
  return `#${str}`;
};

export const accessObjectProperty = (object, key) => {
  if (key === OBJECT_WILD_CARD_KEY) return object;

  let result;
  if (typeof key === "object") {
    const convertedSource = key.map((src) => src.split(".").reduce((o, i) => o[i], object));
    return convertedSource.join(" ");
  }
  try {
    result = key.split(".").reduce((o, i) => o[i], object);
  } catch (error) {}
  if (!result) return DEFAULT_RETURN_VALUE;
  return result;
};

export const getTimelineDataByServiceAction = (serviceActions) => {
  return serviceActions.map((action) => ({ ...action, color: getColorByServiceActionType(action.action) }));
};

const getColorByServiceActionType = (type) => {
  switch (type) {
    case "UNASSIGNED":
      return colors.statusUnassigned;
    case "ASSIGNED":
      return colors.statusAssigned;
    case "CREATED":
      return colors.secondary;
    case "RESOLVED":
      return colors.statusResolved;
    case "GENERIC":
      return colors.primary;
    case "OVERDUE":
      return colors.statusOverdue;
    default:
      return colors.primary;
  }
};

export const getFormattedConversation = (conv, userFirstName, uesrLastName) => {
  return conv.map((message) => ({
    ...message,
    firstName: message.agentSaid ? "Agent" : userFirstName,
    lastName: message.agentSaid ? "" : uesrLastName,
    color: message.agentSaid ? colors.primary : colors.secondary,
  }));
};

export const insertKeys = (objArr, startKey) => {
  let newObjArr = [];
  let key = startKey;
  for (let i = 0; i < objArr.length; i++) {
    newObjArr.push({ ...objArr[i], key: key++ });
  }
  return newObjArr;
};
