import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#96B6C5",
    },
    secondary: {
      main: "#ADC4CE",
    },
    // background: {
    //   default: "#BCA37F",
    // },
    // text: {
    //   primary: "#113946",
    // },

    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
