import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#1d45a8",
    secondary: "#dde8f2",
    white: "#fff",
    orange: "#f7532e",
    lightGrey: "#96abdc",
    grey: 'grey'
  },
  fonts: {
    primary: `"Roboto", sans-serif`,
    secondary: `'Quicksand', sans-serif;`
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
