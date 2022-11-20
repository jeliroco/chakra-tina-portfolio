import { Collapse, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const RandomText = (props) => {
  const { textArray, bold, italic, ...rest } = props;
  const [text, setText] = useState();
  const [show, toggleVisibility] = useState(false);
  useEffect(() => {
    setText(textArray?.[Math.floor(Math.random() * textArray?.length)]);
    toggleVisibility(true);
    setInterval(() => {
      toggleVisibility(false);
    }, 5000);
    setTimeout(() => {
      setInterval(() => {
        setText(textArray?.[Math.floor(Math.random() * textArray?.length)]);
        toggleVisibility(true);
      }, 5000);
    }, 250);
  }, []);

  return (
    <Collapse in={show}>
      <Text
        fontWeight={bold ? "bold" : null}
        fontStyle={italic ? "italic" : null}
        bg="transparent"
        {...rest}
      >
        {text}
      </Text>
    </Collapse>
  );
};
