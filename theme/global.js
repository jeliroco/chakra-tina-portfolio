import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props
import { defineStyle } from "@chakra-ui/react";

export const globalTheme = defineStyle((props) => {
  return {
    body: {
      bg: mode("neutral.100", "neutral.900")(props),
      color: mode("neutral.900", "neutral.100")(props),
      transition: "transform 0.15s ease-out, background 0.15s ease-out",
    },
  };
});
