// import from Next
import { CustomLink } from "./CustomLink";
// import from Chakra
import { useStyleConfig, Box, HStack, Heading } from "@chakra-ui/react";

export const Header = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Header", { variant });

  return (
    <header>
      <Box __css={styles} {...rest}>
        <HStack gap="4">
          <CustomLink href="/">
            <Heading as="h1" size="md" fontFamily="mono" fontWeight="bold">jeliroco..</Heading>
          </CustomLink>
          <CustomLink href="/about">about..</CustomLink>
          <CustomLink href="/posts">posts..</CustomLink>
        </HStack>
      </Box>
    </header>
  );
};
