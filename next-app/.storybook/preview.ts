import type { Preview } from "@storybook/react";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { withThemeFromJSXProvider } from "@storybook/addon-styling";
// import theme from "../app/theme/theme";

/* snipped for brevity */

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: { theme },
//     Provider: ThemeProvider,
//     GlobalStyles: CssBaseline,
//   }),
// ];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
