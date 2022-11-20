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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useContext } from "react";

import { ThemeContext } from "../theme/context";

import {
  RiCheckboxCircleLine,
  RiLightbulbFlashFill,
  RiLightbulbLine,
  RiPaletteLine,
} from "react-icons/ri";
import { colors } from "../theme/color";

import { SimplePopover } from "./SimplePopover";
import { mode } from "@chakra-ui/theme-tools";

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
            placement="top-end"
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
                    color={colorMode == "light" ? "white" : "black"}
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
          <SimplePopover
            colorScheme={context.colorScheme}
            trigger="hover"
            placement="top-end"
            triggerContent={
              <IconButton
                colorScheme={context.colorScheme}
                aria-label="Color Palette"
                icon={<Icon as={RiPaletteLine} w={6} h={6} />}
              />
            }
            bodyContent={
              <Grid gap={2} templateColumns={["repeat(5,1fr)", ""]}>
                {colors.map(function (color) {
                  return (
                    <GridItem key={color}>
                      <SimplePopover
                        colorScheme={`${color}`}
                        trigger="hover"
                        placement="top"
                        triggerContent={
                          <IconButton
                            key={color}
                            colorScheme={color}
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
                        }
                        bodyContent={
                          <Text>
                            {color[0].toUpperCase() + color.substring(1)} Color
                            Scheme
                          </Text>
                        }
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            }
          />
        </HStack>
      </Box>
    </footer>
  );
};
