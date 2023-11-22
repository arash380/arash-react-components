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
    // Fixed colors will changed during mode change
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
  const [darkMode, setDarkMode] = useState(false);
  const thm = theme ? theme : DEFAULT_THEME;

  useEffect(() => {
    const rootElement = document.querySelector(":root");

    Object.keys(thm.colors).forEach((k) => {
      rootElement.style.setProperty(CSS_PREFIX_CLR.replace(PLACEHOLDER, k), thm.colors[k]);
    });

    Object.keys(thm.sizes).forEach((k) => {
      rootElement.style.setProperty(CSS_PREFIX_SZ.replace(PLACEHOLDER, k), thm.sizes[k]);
    });
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((v) => !v);
    thm.colors.black = DEFAULT_THEME.colors[`${darkMode ? "white" : "black"}-f`];
    thm.colors.white = DEFAULT_THEME.colors[`${darkMode ? "black" : "white"}-f`];
    thm.colors.bg = DEFAULT_THEME.colors[`bg-${darkMode ? "dark" : "light"}`];
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
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
