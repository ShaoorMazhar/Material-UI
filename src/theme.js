import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ede7f6",
      dark: "#1A2027",
    },
    secondary: {
      main: "#004d40",
      dark: "#3E5060",
    },
  },
  typography: {
    
    h4: {
       
      fontWeight: 600,
      lineHeight: "1.4",
      marginBottom: "0.35em",
      fontFamily: 'sans-serif'
    
    },
    h5:{
        fontWeight: '400',
      fontSize: '1.25rem',
      lineHeight: '3',
      letterSpacing: '0.0075em',
      color: 'inherit',
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
    // fontFamily: [
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
  },
});

export default theme;
