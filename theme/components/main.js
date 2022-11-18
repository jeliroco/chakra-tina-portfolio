import { Center } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const baseStyle = defineStyle({
  bg: "gray.100",
  p: [3],
  pb: "78px",
  pt: "64px",
  maxWidth: ["28em", "28em", "44em", "58em", "70em", "70em"],
  mx: "auto",
});

const sizes = {};

// Defining a custom variant
const neoBrutalistVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: mode(`gray.100`, `gray.900`)(props),
    color: mode(`gray.900`, `gray.100`)(props),
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
    // border: "2px solid",
    // borderColor: mode("black", "white")(props),
  };
});

export const mainTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    "neo-brutalist": neoBrutalistVariant,
  },
  defaultProps: {
    variant: "neo-brutalist",
    colorScheme: "blue", // set the default color scheme to purple
  },
});
