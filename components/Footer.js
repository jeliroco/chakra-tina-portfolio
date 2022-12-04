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
  Link,
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
            pointerEvents="none"
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
              <Grid
                gap={2}
                pointerEvents="auto"
                templateColumns={["repeat(5,1fr)", ""]}
              >
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
          <Spacer />
          <Link isExternal href="https://tina.io/">
            <SimplePopover
              trigger="hover"
              placement="top-end"
              triggerContent={
                <IconButton
                  icon={
                    <Icon viewBox="0 0 25 30" w={6} h={6}>
                      <g>
                        <path
                          style={{
                            fill: colorMode == "light" ? "#000000" : "#FFFFFF",
                          }}
                          d="m 2.7475182,32.447879 c 0,0 -1.4323292,-3.507908 -1.4323292,-4.180256 0,-0.672348 0.9353991,-3.624835 0.9353991,-5.788044 0,-2.163208 -0.4185411,-3.247156 -2.04618379,-3.683303 0,0 0.93539809,-1.812417 2.16310809,-2.104743 1.2277111,-0.292325 7.5416489,-0.380023 9.3247516,-0.906209 1.783103,-0.526187 3.215432,-0.467721 3.595437,-1.49086 0.380005,-1.023139 1.432329,-3.157116 1.841565,-7.1035111 0.409238,-3.9463948 0.672318,-4.8526044 1.140018,-5.4664874 0.467698,-0.6138841 1.607715,-1.49086075 2.981581,-1.49086075 0,0 -1.052323,1.69548835 -0.08769,2.71862775 0.964629,1.0231394 1.95849,1.3446969 1.95849,1.3446969 l -0.467701,1.2277681 c 0,0 -0.555393,-0.3215585 -1.052323,0.3507905 -0.496931,0.6723489 -0.4677,2.3678363 -0.409237,3.6833012 0.05846,1.3154648 0.73078,8.6528368 0.73078,8.6528368 0,0 -2.250803,4.764906 -2.689271,5.729581 -0.438468,0.964673 -1.052322,2.338604 -0.964628,3.683301 0.08769,1.344698 0.643086,3.566372 1.432328,4.764907 l -1.900028,-0.05846 c 0,0 -2.747732,-3.332513 -3.1862,-4.589512 -0.438468,-1.257 -0.263081,-3.18635 -0.263081,-3.18635 0,0 -5.290847,-0.204628 -5.9923943,0.02923 C 7.6583604,24.81818 6.1091068,25.432066 5.3783269,26.484437 4.647547,27.536809 4.062923,29.787715 3.9752292,31.395506"
                        />
                        <path
                          style={{
                            fill: colorMode == "light" ? "#000000" : "#FFFFFF",
                          }}
                          d="m 7.9214398,32.477113 c 0,0 -1.5784863,-1.227768 -2.3677274,-5.028 0,0 0.5261628,-1.315465 2.2800326,-1.841651 0,0 -0.087692,2.601697 0.5553943,4.151023 0.6430861,1.549325 1.22771,2.718628 1.22771,2.718628 z"
                        />
                      </g>
                    </Icon>
                  }
                ></IconButton>
              }
              bodyContent={<Text>Made with Tina.io</Text>}
            />
          </Link>
          <Link isExternal href="https://chakra-ui.com/">
            <SimplePopover
              trigger="hover"
              placement="top-end"
              triggerContent={
                <IconButton
                  icon={
                    <Icon viewBox="-0.5 0 27 27 " w={6} h={6}>
                      <g>
                        <path
                          style={{
                            fill: colorMode == "light" ? "#000000" : "#FFFFFF",
                          }}
                          d="M 13.228944,0 A 13.22911,13.229112 0 0 0 0,13.229389 13.22911,13.229112 0 0 0 13.228944,26.458333 13.22911,13.229112 0 0 0 26.458333,13.229389 13.22911,13.229112 0 0 0 13.228944,0 Z m 3.356233,4.865915 -3.444672,6.960452 h 6.32138 L 8.8785513,21.308878 13.815131,14.135106 H 7.3159849 Z"
                        />
                      </g>
                    </Icon>
                  }
                ></IconButton>
              }
              bodyContent={<Text>Made with Chakra UI</Text>}
            />
          </Link>
        </HStack>
      </Box>
    </footer>
  );
};
