import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          //fontSize: "1rem", //if you want to change a sx prop then you have to do for example
          //fontSize: "1rem!important" this is the important flag
        },
      },
    },
  },
  palette: {
    /* you can use the default styles or you can create your own */
    primary: {
      main: "#bada55",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
