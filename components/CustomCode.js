import { Code } from "@chakra-ui/react";

export const CustomCode = (props) => {
  const { children, ...rest } = props;
  return (
    <Code bg="transparent" {...rest}>
      <pre style={{ whiteSpace: "pre-wrap" }}>{children}</pre>
    </Code>
  );
};
