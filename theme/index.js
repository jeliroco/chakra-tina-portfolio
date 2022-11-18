import { defineStyleConfig, extendTheme, useColorMode } from "@chakra-ui/react";
import { getPopoverTheme } from "./components/popover";
import { getTabsTheme } from "./components/tabs";
import { getButtonTheme } from "./components/button";
import { getHeaderTheme } from "./components/header";
import { getFooterTheme } from "./components/footer";
import { getMainTheme } from "./components/main";
import { getStyleBoxTheme } from "./components/styleBox";
import { globalTheme } from "./global";
import { themeColors } from "./color";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const getTheme = (themeConfig) => {
  return extendTheme({
    config,
    colors: themeColors,
    styles: { global: globalTheme },

    components: {
      Header: getHeaderTheme(themeConfig),
      Footer: getFooterTheme(themeConfig),
      MainContent: getMainTheme(themeConfig),
      Tabs: getTabsTheme(themeConfig),
      Popover: getPopoverTheme(themeConfig),
      Button: getButtonTheme(themeConfig),
      StyleBox: getStyleBoxTheme(themeConfig),
    },
  });
};

export { getTheme };
