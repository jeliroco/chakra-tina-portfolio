import { Box, Collapse, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export const RandomText = (props) => {
  const { textArray, bold, italic, ...rest } = props;
  const [text, setText] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      var array = textArray.filter((elem) => elem != text);
      setText(array?.[Math.floor(Math.random() * array?.length)]);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box>
      <TextTransition springConfig={presets.wobbly} inline>
        <Text
          fontSize={["xs", "sm"]}
          fontWeight={bold ? "bold" : null}
          fontStyle={italic ? "italic" : null}
          bg="transparent"
          {...rest}
        >
          {text}
        </Text>
      </TextTransition>
    </Box>
  );
};
