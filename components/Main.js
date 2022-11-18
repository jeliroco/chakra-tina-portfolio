// import from Chakra
import { useStyleConfig, Box } from "@chakra-ui/react";
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
        {showDetail && (
          <>
            <StyleBox
              w="10"
              h="10"
              pos="absolute"
              right="3"
              top="3"

              borderRadius="100"
              bg="neutral.100"
              borderColor={`${context.colorScheme}.600`}
            ></StyleBox>
            <StyleBox
              w="10"
              h="10"
              pos="absolute"
              left="3"
              top="3"
              borderRadius="100"
              bg="neutral.100"
              borderColor={`${context.colorScheme}.600`}
            ></StyleBox>

            {
              <StyleBox
                display={["none", "none", "block"]}
                w="10"
                h="10"
                pos="absolute"
                left="50%"
                transform="translateX(-50%)"
                top="3"
                borderRadius="100"
                bg="neutral.100"
                borderColor={`${context.colorScheme}.600`}
              ></StyleBox>
            }

            <StyleBox
              w="6"
              h="100"
              pos="absolute"
              right="5"
              top="-16"
              borderBottomRadius="10"
              bg={`${context.colorScheme}.800`}
              borderColor="black"
            ></StyleBox>
            <StyleBox
              w="6"
              h="100"
              pos="absolute"
              left="5"
              top="-16"
              borderBottomRadius="10"
              bg={`${context.colorScheme}.800`}
              borderColor="black"
            ></StyleBox>
            <StyleBox
              display={["none", "none", "block"]}
              w="6"
              h="100"
              pos="absolute"
              left="50%"
              transform="translateX(-50%)"
              top="-16"
              borderBottomRadius="10"
              bg={`${context.colorScheme}.800`}
              borderColor="black"
            ></StyleBox>
          </>
        )}
        {props.children}
      </Box>
    </main>
  );
};
