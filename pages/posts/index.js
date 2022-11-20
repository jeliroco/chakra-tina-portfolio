import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../.tina/__generated__/client";
import { PostCard } from "../../components/PostCard";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { OSLayout } from "../../components/OSLayout";
import { CustomLink } from "../../components/CustomLink";
import { Button } from "tinacms";
import { PostsLayout } from "../../components/PostsLayout";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const posts = data.postConnection.edges;
  return (
    <Layout>
      <PostsLayout posts={posts} />
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
