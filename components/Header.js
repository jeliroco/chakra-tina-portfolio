// import from Next
import NextLink from "next/link";

// import from Chakra
import { Box, Link, HStack } from "@chakra-ui/react";

export const Header = (props) => {
  return (
    <header>
      <Box p={3}>
        <HStack>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
          <NextLink href="/posts" passHref>
            <Link>Posts</Link>
          </NextLink>
        </HStack>
      </Box>
    </header>
  );
};
