import PropTypes from "prop-types";
import React, { useEffect } from "react";

const PLACEHOLDER = "AAA";
const CSS_PREFIX_CLR = `--arash-${PLACEHOLDER}-clr`;

export const DEFAULT_THEME = {
  colors: {
    primary: "#5c94a7",
    secondary: "#fc7c58",
    tertiary: "#e6d0cb",
    white: "#fff",
    black: "#000",
  },
};

const ThemeProvider = ({ children, theme }) => {
  const thm = theme ? theme : DEFAULT_THEME;

  useEffect(() => {
    const rootElement = document.querySelector(":root");

    Object.keys(thm.colors).forEach((k) => {
      rootElement.style.setProperty(CSS_PREFIX_CLR.replace(PLACEHOLDER, k), thm.colors[k]);
    });
  }, []);

  return children;
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
};

export default ThemeProvider;
