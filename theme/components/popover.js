import { popoverAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(popoverAnatomy.keys);
const baseStyle = definePartsStyle({
  popper: {
    zIndex: 1000,
  },
  content: {
    width: "min-content"
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
    content: {
      borderRadius: 0,
      fontFamily: "mono",
      fontWeight: "bold",
      bg: mode(`${c}.300`, `${c}.600`)(props),
      color: mode("#fff", "gray.800")(props),
      border: "2px solid",
      borderColor: mode("black", "white")(props),
    },
    arrow: {
      bg: "transparent",
    },
    body: {
      whiteSpace: "nowrap",
      width: "min-content"
    }
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
export const popoverTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
