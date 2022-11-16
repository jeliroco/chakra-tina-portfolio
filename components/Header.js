// import from Next
import NextLink from "next/link";

// import from Chakra
import { useStyleConfig, Box, Link, HStack } from "@chakra-ui/react";

export const Header = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Header", { variant });

  return (
    <header>
      <Box __css={styles} {...rest}>
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
