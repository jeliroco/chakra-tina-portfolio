import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props
import { config } from "../config";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);
const baseStyle = definePartsStyle({
  tab: {
    p: 2,
  },
  tabpanel: {
    p: 0,
    m: 0,
  },
});

// define custom sizes
const sizes = {
  // xl: definePartsStyle({
  //   // define the parts that will change for each size
  //   tab: {
  //     fontSize: "xl",
  //     py: "4",
  //     px: "6",
  //   },
  //   tabpanel: {
  //     py: "4",
  //     px: "6",
  //   },
  // }),
};

const neoBrutalistVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    tab: {
      bg: mode(`${c}.300`, `${c}.600`)(props),
      color: mode(`${c}.400`, `${c}.400`)(props),
      border: "2px solid",
      borderColor: mode(`${c}.400`, `${c}.400`)(props),
      transition: "transform 0.15s ease-out, background 0.15s ease-out",
      _hover: {
        transform: "scale(1.05, 1.05)",
        bg: mode(`${c}.300`, `${c}.300`)(props),
      },
      _selected: {
        transform: "scale(1, 1)",
        bg: mode(`${c}.100`, `${c}.100`)(props),
        color: mode(`${c}.500`, `${c}.500`)(props),
        borderColor: mode(`${c}.500`, `${c}.500`)(props),
      },
    },
    tablist: {
      bg: mode(`${c}.300`, `${c}.600`)(props),
      border: "2px solid",
      borderColor: mode("black", "white")(props),
      p: 2,
    },
    tabpanel: {
      border: "2px solid",
      borderColor: mode("black", "white")(props),
      borderTop: "none",
    },
  };
});

const variants = {
  "neo-brutalist": neoBrutalistVariant,
};

// export the component theme
export const getTabsTheme = (themeConfig) => {
  return defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: themeConfig,
  });
};
