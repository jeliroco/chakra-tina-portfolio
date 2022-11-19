import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../.tina/__generated__/client";
import { PostCard } from "../../components/PostCard";
import { Grid, GridItem, Heading } from "@chakra-ui/react";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data.postConnection.edges;
  return (
    <Layout>
      <Heading as="h2">Posts</Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap="3">
        {postsList.map((post) => (
          <GridItem>
            <PostCard post={post.node}>
              <div key={post.node.id}>
                <Link href={`/posts/${post.node._sys.filename}`}>
                  <a>{post.node.title}</a>
                </Link>
              </div>
            </PostCard>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
