// import from Chakra
import {
  useStyleConfig,
  useColorModeValue,
  Box,
  Collapse,
} from "@chakra-ui/react";
import { StyleBox } from "./StyleBox.js";
import { ThemeContext } from "../theme/context";
import { useContext } from "react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

export const Main = (props) => {
  const { variant, showDetail = true, ...rest } = props;

  const styles = useStyleConfig("MainContent", { variant });
  const context = useContext(ThemeContext);

  return (
    <main>
      <Box __css={styles} {...rest} pos="relative">
        {props.children}
      </Box>
    </main>
  );
};
