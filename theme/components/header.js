import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const baseStyle = defineStyle({
  bg: "gray.400",
  p: 3,
  zIndex: 100,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
});

const sizes = {};

// Defining a custom variant
const neoBrutalistVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontFamily: "mono",
    fontWeight: "bold",
    bg: mode(`${c}.300`, `${c}.600`)(props),
    color: mode("#fff", "gray.800")(props),
    borderBottom: "2px solid",
    borderColor: mode("black", "white")(props),
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
  };
});

export const headerTheme = defineStyleConfig({
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
