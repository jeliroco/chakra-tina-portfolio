// import from Chakra
import { useStyleConfig, Box } from "@chakra-ui/react";

export const Main = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Main", { variant });
  return (
    <main>
      <Box __css={styles} {...rest}>
        {props.children}
      </Box>
    </main>
  );
};
