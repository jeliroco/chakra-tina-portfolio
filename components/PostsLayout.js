import { PostCard } from "./PostCard";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { OSLayout } from "./OSLayout";
import { StyleBox } from "./StyleBox";

export function PostsLayout({ posts, ...rest }) {
  posts.sort((a, b) => {
    var aDate = new Date(a?.node?.metadata?.createdAt);
    var bDate = new Date(b?.node?.metadata?.createdAt);
    return bDate.getTime() - aDate.getTime();
  });
  return (
    <OSLayout title="Posts">
      <Box p={3}>
        <StyleBox mb="2" p="2">
          <Heading as="h2">Filters</Heading>
          <Flex gap="2">
            <Checkbox defaultChecked>filter</Checkbox>
            <Checkbox defaultChecked>filter</Checkbox>
            <Checkbox defaultChecked>filter</Checkbox>
          </Flex>
        </StyleBox>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap="3"
        >
          {posts.map((post, i) => (
            <GridItem key={i}>
              <PostCard loadDelay={i * 100} post={post.node}></PostCard>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </OSLayout>
  );
}
