import { defineStyleConfig, extendTheme, useColorMode } from "@chakra-ui/react";
import { popoverTheme } from "./components/popover";
import { tabsTheme } from "./components/tabs";
import { buttonTheme } from "./components/button";
import { headerTheme } from "./components/header";
import { footerTheme } from "./components/footer";
import { mainTheme } from "./components/main";
import { styleBoxTheme } from "./components/styleBox";
import { globalTheme } from "./global";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  config,
  colors,
  styles: { global: globalTheme },
  components: {
    Header: headerTheme,
    Footer: footerTheme,
    MainContent: mainTheme,
    Tabs: tabsTheme,
    Popover: popoverTheme,
    Button: buttonTheme,
    StyleBox: styleBoxTheme,
  },
});

export { theme };
