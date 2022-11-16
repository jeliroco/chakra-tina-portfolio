import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const Header = defineStyleConfig({
  baseStyle: {
    bg: "gray.400",
    p: 3,
  },
  variants: {
    fixed: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
    },
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    static: {
      position: "static",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "static",
  },
});

const Footer = defineStyleConfig({
  baseStyle: {
    bg: "gray.400",
    p: 3,
  },
  variants: {
    fixed: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
    },
    absolute: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    static: {
      position: "static",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "static",
  },
});

const Main = defineStyleConfig({
  baseStyle: {
    bg: "gray.100",
    p: 3,
  },
  variants: {
    static: {},
    fixedHeader: {
      pb: "64px",
    },
    fixedFooter: {
      pt: "64px",
    },
    fixed: {
      pb: "64px",
      pt: "64px",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "static",
  },
});

const theme = extendTheme({
  colors,
  components: {
    Header,
    Footer,
    Main,
  },
});

export { theme };
