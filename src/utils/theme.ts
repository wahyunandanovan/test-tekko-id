import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
  },
};

export const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: palette.blue,
    },
    secondary: {
      main: palette.green,
    },
    warning: {
      main: palette.brown,
    },
    error: {
      main: palette.red,
    },
    info: {
      main: "#03a9f4",
    },
    success: {
      main: palette.green,
    },
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
    body1: {
      color: palette.body,
      fontFamily: "Public Sans, sans-serif",
    },
    h1: {
      fontFamily: "Public Sans, sans-serif",
      color: palette.heading,
      fontSize: "50px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "26px",
      },
    },
    h2: {
      fontFamily: "Public Sans, sans-serif",
      color: palette.heading,
      fontSize: "40px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "40px",
      },
    },
    h3: {
      fontFamily: "Public Sans, sans-serif",
      color: palette.heading,
      fontSize: "28px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "26px",
      },
    },
    h4: {
      fontFamily: "Public Sans, sans-serif",
      color: palette.heading,
      fontSize: "24px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "22px",
      },
    },
    h5: {
      fontFamily: "Public Sans, sans-serif",
      color: palette.subheading,
      fontSize: "20px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "18px",
      },
    },
    h6: {
      fontFamily: "Public Sans, sans-serif",
    },
  },
});
