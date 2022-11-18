// import from Chakra
import {
  useStyleConfig,
  useColorMode,
  Box,
  Button,
  IconButton,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { RiLightbulbFlashFill, RiLightbulbLine } from "react-icons/ri";

export const Footer = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Footer", { variant });
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <footer>
      <Box __css={styles} {...rest}>
        <Popover
          trigger="hover"
          openDelay="500"
          placement="top-start"
          gutter="2"
        >
          <PopoverTrigger>
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
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody fontSize="12px" textAlign="center">
              {colorMode == "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </footer>
  );
};
