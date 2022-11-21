import { useToken } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const baseStyle = defineStyle({
  bg: "gray.100",
  p: [3],
  //pt: "60px",
  mb: "200",
  mt: "64px",
  maxWidth: ["28em", "28em", "44em", "58em", "70em", "70em"],
  mx: "auto",
  boxShadow: "base",
});

const sizes = {};

// Defining a custom variant
const neoBrutalistVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  const [c600, c700] = useToken("colors", [`${c}.600`, `${c}.700`]);
  return {
    bg: mode("white", "black")(props),
    color: mode("neutral.900", "neutral.100")(props),
    transition: "transform 0.5s ease-out, background 0.5s ease-out",
    border: "2px solid",
    borderColor: mode(`${c}.600`, `${c}.700`)(props),
    boxShadow: mode(`6px 6px ${c600}`, `6px 6px ${c700}`)(props),
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
