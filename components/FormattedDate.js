// import from Chakra
import { Stack, Text } from "@chakra-ui/react";
import { StyleBox } from "./StyleBox";

export const FormattedDate = (props) => {
  const { date, ...rest } = props;

  return (
    <Text as="span" {...rest}>
      {new Date(date).toLocaleString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        timeZone: "America/Toronto",
      })}
    </Text>
  );
};
