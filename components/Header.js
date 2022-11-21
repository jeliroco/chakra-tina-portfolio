// import from Next
import { CustomLink } from "./CustomLink";
// import from Chakra
import {
  useStyleConfig,
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { RiHome4Line, RiQuestionLine, RiArticleLine } from "react-icons/ri";
import { SimplePopover } from "./SimplePopover";

export const Header = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Header", { variant });

  const navItems = [
    {
      href: "/",
      title: "Home",
      icon: <Icon as={RiHome4Line} w={6} h={6} />,
    },
    {
      href: "/about",
      title: "About",
      icon: <Icon as={RiQuestionLine} w={6} h={6} />,
    },
    {
      href: "/posts",
      title: "Posts",
      icon: <Icon as={RiArticleLine} w={6} h={6} />,
    },
  ];

  return (
    <header>
      <Box __css={styles} {...rest}>
        <HStack gap="0">
          {navItems.map(function (navItem, i) {
            return (
              <CustomLink href={navItem.href} key={i}>
                <SimplePopover
                  trigger="hover"
                  placement="bottom-start"
                  triggerContent={
                    <IconButton
                      aria-label="Toggle Color Palette"
                      icon={navItem.icon}
                    />
                  }
                  bodyContent={<Text>{navItem.title}</Text>}
                />
              </CustomLink>
            );
          })}
        </HStack>
      </Box>
    </header>
  );
};
