import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/nunito";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  config,
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
});

export default theme;
