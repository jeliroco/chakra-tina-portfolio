// import from Chakra
import { Stack, Text } from "@chakra-ui/react";
import { FormattedDate } from "./FormattedDate";
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
            <b>Created:</b> <FormattedDate date={createdAt} />
          </Text>
        </StyleBox>
      )}
      {editedAt && createdAt != editedAt && (
        <StyleBox mb={["2", "0"]}>
          <Text fontSize="xs">
            <b>Edited:</b> <FormattedDate date={editedAt} />
          </Text>
        </StyleBox>
      )}
    </Stack>
  );
};
