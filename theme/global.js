import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props
import { defineStyle } from "@chakra-ui/react";

export const globalTheme = defineStyle((props) => {
  return {
    body: {
      bg: mode(`gray.100`, `gray.900`)(props),
      color: mode(`gray.900`, `gray.100`)(props),
      transition: "transform 0.15s ease-out, background 0.15s ease-out",
    },
  };
});
