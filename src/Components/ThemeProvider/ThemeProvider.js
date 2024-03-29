import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// --successColor: #4bb543;
// --statusResolvedColor: #5f9936;
// --statusResolvedBackgroundColor: #ebf2e6;
// --statusAssignedColor: #e7bb09;
// --statusAssignedBackgroundColor: #fcf7e0;
// --statusOverdueColor: #e03b24;
// --statusOverdueBackgroundColor: #fbe7e4;
// --statusUnassignedColor: #3865a3;
// --statusUnassignedBackgroundColor: #e6ecf4;
// --warningBackgroundColor: #fcf8e3;

const PLACEHOLDER = "AAA";
const CSS_PREFIX_CLR = `--arash-${PLACEHOLDER}-clr`;
const CSS_PREFIX_SZ = `--arash-${PLACEHOLDER}-sz`;
const DARK_MODE_KEY = "arash-dark-mode";
const rootElement = document.querySelector(":root");

export const DEFAULT_THEME = {
  colors: {
    primary: "#5c94a7",
    secondary: "#fc7c58",
    tertiary: "#e6d0cb",
    white: "#fff",
    black: "#000",
    placeholder: "#989898",
    border: "#ccc",
    bg: "#fbfbfb",
    // Fixed colors will not changed during mode change
    "white-f": "#fff",
    "black-f": "#000",
    "bg-light": "#fbfbfb",
    "bg-dark": "#202124",
  },
  sizes: {
    border: "2px",
  },
};

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

const ThemeProvider = ({ children, theme }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem(DARK_MODE_KEY) === "true");
  const thm = theme ? theme : DEFAULT_THEME;

  useEffect(() => {
    thm.colors.black = DEFAULT_THEME.colors[`${darkMode ? "white" : "black"}-f`];
    thm.colors.white = DEFAULT_THEME.colors[`${darkMode ? "black" : "white"}-f`];
    thm.colors.bg = DEFAULT_THEME.colors[`bg-${darkMode ? "dark" : "light"}`];

    Object.keys(thm.colors).forEach((k) => {
      rootElement.style.setProperty(CSS_PREFIX_CLR.replace(PLACEHOLDER, k), thm.colors[k]);
    });

    Object.keys(thm.sizes).forEach((k) => {
      rootElement.style.setProperty(CSS_PREFIX_SZ.replace(PLACEHOLDER, k), thm.sizes[k]);
    });

    localStorage.setItem(DARK_MODE_KEY, darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <MUIThemeProvider
        theme={createTheme({
          palette: {
            primary: { main: thm.colors.primary },
            secondary: { main: thm.colors.secondary },
            mode: darkMode ? "dark" : "light",
          },
        })}
      >
        <CssBaseline />
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </MUIThemeProvider>
    </DarkModeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.any,
};

export default ThemeProvider;
