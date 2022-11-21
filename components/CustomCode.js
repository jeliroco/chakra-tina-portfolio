import { Code, useColorMode } from "@chakra-ui/react";

export const CustomCode = (props) => {
  const { children, colorScheme, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Code
      color={colorMode == "light" ? `${colorScheme}.500` : `${colorScheme}.300`}
      bg="transparent"
      {...rest}
    >
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
        {children}
      </pre>
    </Code>
  );
};
