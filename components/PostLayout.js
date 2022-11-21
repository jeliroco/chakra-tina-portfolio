// import from tina
import { TinaMarkdown } from "tinacms/dist/rich-text";
// import from chakra
import { Box } from "@chakra-ui/react";
import { components } from "./TinaMarkdownComponents";
import { OSLayout } from "./OSLayout";
import { PostDate } from "./PostDate";

export default function PostLayout(props) {
  const { post, ...rest } = props;

  return (
    <OSLayout page={post}>
      <Box p={2}>
        <PostDate
          createdAt={post.metadata?.createdAt}
          editedAt={post.metadata?.editedAt}
        />
      </Box>
      <Box p="2" pt="0" display="flex" flexDirection="column" gap="2">
        <TinaMarkdown content={post?.body} components={components} />
      </Box>
    </OSLayout>
  );
}
