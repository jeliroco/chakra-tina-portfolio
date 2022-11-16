// import from Chakra
import { useStyleConfig, Box } from "@chakra-ui/react";

export const Footer = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Footer", { variant });

  return (
    <footer>
      <Box __css={styles} {...rest}>
        I am the footer!
      </Box>
    </footer>
  );
};
