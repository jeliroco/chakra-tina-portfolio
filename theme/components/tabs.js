import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

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
      bg: mode("#fff", "gray.800")(props),
      color: mode(`${c}.500`, `${c}.300`)(props),
      border: "2px solid",
      borderColor: mode("black", "white")(props),
      transition: "transform 0.15s ease-out, background 0.15s ease-out",
      _hover: {
        transform: "scale(1.05, 1.05)",
        bg: mode(`${c}.100`, `${c}.900`)(props),
      },
      _selected: {
        transform: "scale(1, 1)",
        bg: mode(`${c}.300`, `${c}.600`)(props),
        color: mode("#fff", "gray.800")(props),
      },
    },
    tablist: {
      bg: mode(`${c}.100`, `${c}.900`)(props),
      border: "2px solid",
      borderColor: mode("black", "white")(props),
      p: 2
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

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  size: "xl",
  variant: "neo-brutalist",
  colorScheme: "blue",
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
