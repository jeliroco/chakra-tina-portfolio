import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ColorModeScript } from "@chakra-ui/react";

import { client } from "../../.tina/__generated__/client";

import { CustomLink } from "../../components/CustomLink";

import {
  useMultiStyleConfig,
  Button,
  Box,
  Code,
  Container,
  Center,
  HStack,
  Flex,
  Heading,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Spacer,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  RiArrowLeftLine,
  RiFileTextLine,
  RiFileCodeLine,
} from "react-icons/ri";
import { PostDate } from "../../components/PostDate";

export default function Post(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data, isLoading } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const styles = useMultiStyleConfig("Tabs");

  const components = {
    a: (props) => {
      return (
        <CustomLink href={props?.href ?? "/"}>{props?.children}</CustomLink>
      );
    },
    img: (props) => {
      return (
        <Container width="100%" maxWidth="768px" p="6">
          <Image src={props?.url} />
          <Center>
            <Text>{props.caption}</Text>
          </Center>
        </Container>
      );
    },
    h1: (props) => {
      return (
        <Heading as="h1" size="xl">
          {props.children}
        </Heading>
      );
    },
    h2: (props) => {
      return (
        <Heading as="h2" size="lg">
          {props.children}
        </Heading>
      );
    },
    h3: (props) => {
      return (
        <Heading as="h3" size="md">
          {props.children}
        </Heading>
      );
    },
    h4: (props) => {
      return (
        <Heading as="h4" size="sm">
          {props.children}
        </Heading>
      );
    },
    h5: (props) => {
      return (
        <Heading as="h5" size="xs">
          {props.children}
        </Heading>
      );
    },
    h6: (props) => {
      return (
        <Heading as="h6" size="xs" fontStyle="italic">
          {props.children}
        </Heading>
      );
    },
    p: (props) => {
      return <Text pb="2">{props.children}</Text>;
    },
    code: (props) => {
      return (
        <Code pb="2">
          <pre>{props.children}</pre>
        </Code>
      );
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <PostDate createdAt={data.post.metadata.createdAt} editedAt={data.post.metadata.editedAt} />
      <Tabs>
        <TabList>
          <Flex w="100%" gap="2">
            <Heading as="h1" size={["sm","xl"]}>{data.post.title}</Heading>
            <Spacer />
            <Popover
              trigger="hover"
              openDelay="500"
              placement="top"
              gutter="2"
            >
              <PopoverTrigger>
                <Tab>
                  <Icon as={RiFileTextLine} w={6} h={6} />
                </Tab>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody fontSize="12px" textAlign="center">
                  View Styled Post
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover
              trigger="hover"
              openDelay="500"
              placement="top"
              gutter="2"
            >
              <PopoverTrigger>
                <Tab>
                  <Icon as={RiFileCodeLine} w={6} h={6} />
                </Tab>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody fontSize="12px" textAlign="center">
                  View Raw Data
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box p="2">
              <TinaMarkdown content={data.post.body} components={components} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p="2">
              <Code bg="transparent">
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(data.post, null, 2)}
                </pre>
              </Code>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  const paths = data.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
