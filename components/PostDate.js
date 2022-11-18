// import from Chakra
import { Stack, Text } from "@chakra-ui/react";
import { StyleBox } from "./StyleBox";

export const PostDate = (props) => {
  const { createdAt, editedAt, ...rest } = props;

  return (
    <Stack
      direction={["column", "row"]}
      gap="0"
      mb="1"
      display={["none", "flex"]}
    >
      {createdAt && (
        <StyleBox>
          <Text fontSize="xs">
            <b>Created:</b>{" "}
            {new Date(createdAt).toLocaleString("en-CA", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              timeZone: "America/Toronto",
            })}
          </Text>
        </StyleBox>
      )}
      {editedAt && createdAt != editedAt && (
        <StyleBox mb={["2", "0"]}>
          <Text fontSize="xs">
            <b>Edited:</b>{" "}
            {new Date(editedAt).toLocaleString("en-CA", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              timeZone: "America/Toronto",
            })}
          </Text>
        </StyleBox>
      )}
    </Stack>
  );
};
