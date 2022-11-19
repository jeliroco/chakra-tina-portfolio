// import from Chakra
import { Text, Box } from "@chakra-ui/react";
import { StyleBox } from "./StyleBox";
import { PostDate } from "./PostDate";
import { FormattedDate } from "./FormattedDate";
import { CustomLink } from "./CustomLink";

export const PostCard = (props) => {
  const { post, children, ...rest } = props;

  return (
    <CustomLink key={post.id} href={`/posts/${post._sys.filename}`}>
      <StyleBox {...rest} p="2">
        <Text>{post.title}</Text>
        <FormattedDate
          fontSize="xs"
          date={post.metadata.editedAt ?? post.metadata.createdAt}
        />
      </StyleBox>
    </CustomLink>
  );
};
