import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.38)",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: "700",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: "500",
    },
    h5: {
      fontSize: "1.1rem",
      fontWeight: "500",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "500",
    },
  },
});

export default lightTheme;
