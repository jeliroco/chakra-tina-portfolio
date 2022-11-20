import { useToken } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

export const getShadows = (props) => {
  const { colorScheme: c } = props;
  const [c600, c700] = useToken("colors", [`${c}.600`, `${c}.700`]);
  return {
    "neo-brutalist": mode(
      `10px 10px 4px ${c600}`,
      `10px 10px 4px ${c700}`
    )(props),
  };
};
