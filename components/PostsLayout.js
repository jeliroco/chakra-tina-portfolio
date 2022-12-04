import { PostCard } from "./PostCard";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { OSLayout } from "./OSLayout";
import { StyleBox } from "./StyleBox";

export function PostsLayout({ posts, ...rest }) {
  posts.sort((a, b) => {
    var aDate = new Date(a?.node?.metadata?.createdAt);
    var bDate = new Date(b?.node?.metadata?.createdAt);
    return bDate.getTime() - aDate.getTime();
  });

  const sortAlphabetical = (array) => {
    array.sort();
    return array;
  };

  const filters = sortAlphabetical([
    "dev",
    "music",
    "video",
    "acting",
    "art",
    "blog",
  ]);

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: filters,
  });

  const filterPost = (post) => {
    return (
      post.tags && post.tags.some((tagObject) => value.includes(tagObject.tag))
    );
  };

  return (
    <OSLayout title="Posts">
      <Box p={3}>
        <StyleBox mb="2" p="2">
          <CheckboxGroup defaultValue={filters}>
            <Flex
              gap="2"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
            >
              <Heading as="h3" size="md">
                Filters:
              </Heading>
              {filters.map((filter, i) => (
                <Checkbox key={i} {...getCheckboxProps({ value: filter })}>
                  {filter}
                </Checkbox>
              ))}
            </Flex>
          </CheckboxGroup>
        </StyleBox>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          templateRows={["1fr min-content"]}
          gap="3"
        >
          {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
          {posts
            .filter((post) => filterPost(post.node))
            .map((post, i) => (
              <GridItem key={post.node.id}>
                <PostCard loadDelay={i * 100} post={post.node}></PostCard>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </OSLayout>
  );
}
