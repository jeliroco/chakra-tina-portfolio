// import from Chakra
import { useStyleConfig, Box } from "@chakra-ui/react";

export const StyleBox = (props) => {
  const { children, variant, ...rest } = props;

  const styles = useStyleConfig("StyleBox", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};
