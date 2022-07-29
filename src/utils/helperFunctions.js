export const TABLE_DEFAULT_RETURN_VALUE = "---";
export const TABLE_WILD_CARD_SRC = "*"; // returns the whole object

export const accessObjectProperty = (object, key) => {
  if (key === TABLE_WILD_CARD_SRC) return object;

  let result;
  if (typeof key === "object") {
    const convertedSource = key.map((src) => src.split(".").reduce((o, i) => o[i], object));
    return convertedSource.join(" ");
  }
  try {
    result = key.split(".").reduce((o, i) => o[i], object);
  } catch (error) {}
  if (!result) return TABLE_DEFAULT_RETURN_VALUE;
  return result;
};
