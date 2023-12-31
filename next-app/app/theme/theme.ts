import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blueGrey, cyan, pink } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#001524",
    },
    secondary: {
      main: "#D6CC99",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
