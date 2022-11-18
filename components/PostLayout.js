// import from tina
import { TinaMarkdown } from "tinacms/dist/rich-text";
// import from chakra
import {
  Box,
  Flex,
  Heading,
  Icon,
  Spacer,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
// import from react-icons
import { RiFileTextLine, RiFileCodeLine } from "react-icons/ri";
// import from components
import { PostDate } from "./PostDate";
import { SimplePopover } from "./SimplePopover";
import { CustomCode } from "./CustomCode";
import { components } from "./TinaMarkdownComponents";

export default function PostLayout(props) {
  const { post, ...rest } = props;

  return (
    <Box>
      <PostDate
        createdAt={post.metadata.createdAt}
        editedAt={post.metadata.editedAt}
      />
      <Tabs>
        <TabList>
          <Flex w="100%" gap="2">
            <Heading as="h1" size={["sm", "xl"]}>
              {post.title}
            </Heading>
            <Spacer />
            <SimplePopover
              trigger="hover"
              triggerContent={
                <Tab>
                  <Icon as={RiFileTextLine} w={6} h={6} />
                </Tab>
              }
              bodyContent={<Text>View Styled Post</Text>}
            />
            <SimplePopover
              trigger="hover"
              triggerContent={
                <Tab>
                  <Icon as={RiFileCodeLine} w={6} h={6} />
                </Tab>
              }
              bodyContent={<Text>View Raw Data</Text>}
            />
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box p="2">
              <TinaMarkdown content={post.body} components={components} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p="2">
              <CustomCode>{JSON.stringify(post, null, 2)}</CustomCode>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
