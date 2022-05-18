import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ede7f6",
      dark: "#1A2027",
      light: "#1A2027", //lighter_black
    },
    secondary: {
      main: "#004d40",
      dark: "#3E5060",
      light: "#007FFF", //blue
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
      lineHeight: "1.4",
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 600,
      lineHeight: "1.4",
      marginBottom: "0.35em",
      fontFamily: "sans-serif",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "3",
      letterSpacing: "0.0075em",
      color: "inherit",
      textAlign: "center",
    },
    h6: {
      fontSize: "1.6rem",
      fontWeight: 600,
      lineHeight: "1.4",
      letterSpacing: " 0.1px",
      textAlign: "center",
      marginBottom: "0.35em",
      fontFamily: "Arial",
    },
    subtitle1: {
      fontWeight: 250,
      fontSize: "1.3rem",
      paddingTop: "10px",
    },
    subtitle2: {
      fontSize: "1.2rem",
      margin: "-3px",
      fontWeight: 520,
    },
  },
});

export default theme;
