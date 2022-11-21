import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props
import { config } from "../config";

const baseStyle = defineStyle({
  fontWeight: "normal", // change the font weight to normal
  height: "min-content",
});

const sizes = {};

// Defining a custom variant
const neoBrutalistVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: 0,
    p: 4,
    fontFamily: "mono",
    fontWeight: "bold",
    bg: mode(`${c}.300`, `${c}.600`)(props),
    color: mode("black", "white")(props),
    border: "2px solid",
    borderColor: mode("black", "white")(props),
    transition: "transform 0.5s ease-out, background 0.5s ease-out",

    _hover: {
      transform: "scale(1.05, 1.05)",
      bg: mode(`${c}.400`, `${c}.500`)(props),
    },

    _active: {
      bg: `${c}.700`,
      transform: "scale(1, 1)",
    },
  };
});

export const getButtonTheme = (themeConfig) => {
  return defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
      "neo-brutalist": neoBrutalistVariant,
    },
    defaultProps: themeConfig,
  });
};
