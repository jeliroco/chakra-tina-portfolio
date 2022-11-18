// import from Chakra
import {
  useStyleConfig,
  useColorMode,
  Box,
  IconButton,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";

import { ThemeContext } from "../theme/context";

import { RiLightbulbFlashFill, RiLightbulbLine } from "react-icons/ri";
import { colors } from "../theme/color";

import { RiCheckboxCircleLine } from "react-icons/ri";
import { SimplePopover } from "./SimplePopover";

export const Footer = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Footer", { variant });
  const { colorMode, toggleColorMode } = useColorMode();
  const context = useContext(ThemeContext);
  return (
    <footer>
      <Box __css={styles} {...rest}>
        <HStack>
          <SimplePopover
            trigger="hover"
            placecment="top-right"
            triggerContent={
              <IconButton
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                icon={
                  <Icon
                    as={
                      colorMode == "light"
                        ? RiLightbulbFlashFill
                        : RiLightbulbLine
                    }
                    w={6}
                    h={6}
                  />
                }
              />
            }
            bodyContent={
              <Text>
                {colorMode == "light"
                  ? "Enable Dark Mode"
                  : "Enable Light Mode"}
              </Text>
            }
          />

          {colorMode == "light" ? "Enable Dark Mode" : "Enable Light Mode"}
          <Spacer />
          {colors.map(function (color) {
            return (
              <IconButton
                colorScheme={color}
                active={color == context.setColorScheme}
                aria-label="Toggle Color Palette"
                onClick={() => context.setColorScheme(color)}
                icon={
                  color == context.colorScheme ? (
                    <Icon as={RiCheckboxCircleLine} w={6} h={6} />
                  ) : (
                    <></>
                  )
                }
              />
            );
          })}
        </HStack>
      </Box>
    </footer>
  );
};
