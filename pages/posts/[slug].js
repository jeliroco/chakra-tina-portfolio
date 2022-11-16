import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../.tina/__generated__/client";
import NextLink from "next/link";
import {
  Button,
  Box,
  Link,
  HStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { RiFileTextLine, RiFileCodeLine } from "react-icons/ri";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <Tabs variant="soft-rounded">
        <TabList>
          <HStack mb="2">
            <NextLink href="/" passHref>
              <Link>
                <Button colorScheme="blackAlpha">
                  <ArrowBackIcon w={4} h={4} />
                  Posts
                </Button>
              </Link>
            </NextLink>
            <Popover trigger="hover" openDelay="500" placement="top">
              <PopoverTrigger>
                <Tab>
                  <Icon as={RiFileTextLine} w={8} h={8} />
                </Tab>
              </PopoverTrigger>
              <PopoverContent width="100px">
                <PopoverBody fontSize="12px" textAlign="center">
                  View Post
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover trigger="hover" openDelay="500" placement="top">
              <PopoverTrigger>
                <Tab>
                  <Icon as={RiFileCodeLine} w={8} h={8} placement="top" />
                </Tab>
              </PopoverTrigger>
              <PopoverContent width="100px">
                <PopoverBody fontSize="12px" textAlign="center">
                  View Code
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <Box bg="gray.400" borderRadius="8" p="3">
              <code>
                <pre>{JSON.stringify(data.post, null, 2)}</pre>
              </code>
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
