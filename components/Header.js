// import from Next
import { CustomLink } from "./CustomLink";
// import from Chakra
import { useStyleConfig, Box, HStack } from "@chakra-ui/react";

export const Header = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Header", { variant });

  return (
    <header>
      <Box __css={styles} {...rest}>
        <HStack gap="4">
          <CustomLink href="/">jeliroco..</CustomLink>
          <CustomLink href="/about">about..</CustomLink>
          <CustomLink href="/posts">posts..</CustomLink>
        </HStack>
      </Box>
    </header>
  );
};
