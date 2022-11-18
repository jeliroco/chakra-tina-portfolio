import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props
import { config } from "../config";

const baseStyle = defineStyle({
  bg: "gray.400",
  px: "1",
});

const sizes = {};

// Defining a custom variant
const neoBrutalistVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontFamily: "mono",
    bg: mode(`${c}.300`, `${c}.600`)(props),
    color: mode("gray.800", "neutral.100")(props),
    border: "2px solid",
    borderColor: mode("black", "white")(props),
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
  };
});

export const getStyleBoxTheme = (themeConfig) => {
  return defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
      "neo-brutalist": neoBrutalistVariant,
    },
    defaultProps: themeConfig,
  });
};
