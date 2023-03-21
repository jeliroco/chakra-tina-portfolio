import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props
import { defineStyle } from "@chakra-ui/react";

export const getGlobalTheme = (props) => {
  const { colorScheme: c } = props;
  return defineStyle((props) => {
    return {
      body: {
        bg: mode(`${c}.100`, `${c}.900`)(props),
        color: mode("neutral.900", "neutral.100")(props),
        transition: "transform 0.5s ease-out, background 0.5s ease-out",
      },
    };
  });
};
