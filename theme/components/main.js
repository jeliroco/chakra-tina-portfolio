import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const baseStyle = defineStyle({
  bg: "gray.100",
  p: [3],
  pt: "60px",
  mb: "200",
  mt: "64px",
  maxWidth: ["28em", "28em", "44em", "58em", "70em", "70em"],
  mx: "auto",
});

const sizes = {};

// Defining a custom variant
const neoBrutalistVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: mode("white", "black")(props),
    color: mode("neutral.900", "neutral.100")(props),
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
    border: "2px solid",
    borderColor: mode(`${c}.600`, `${c}.700`)(props),
    boxShadow: "base",
  };
});

export const getMainTheme = (themeConfig) => {
  return defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
      "neo-brutalist": neoBrutalistVariant,
    },
    defaultProps: themeConfig,
  });
};
