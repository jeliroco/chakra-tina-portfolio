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
  Image,
  Center,
  VStack,
  Collapse,
  Fade,
} from "@chakra-ui/react";
// import from react-icons
import { RiFileTextLine, RiFileCodeLine } from "react-icons/ri";
// import from components
import { SimplePopover } from "./SimplePopover";
import { CustomCode } from "./CustomCode";
import { components } from "./TinaMarkdownComponents";

import { HeroImage } from "./HeroImage";
import { useEffect, useState } from "react";

export const OSLayout = (props) => {
  const { title, page, children, ...rest } = props;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Box>
      <Tabs>
        <TabList>
          <Flex w="100%" gap="2">
            <Fade in={loaded}>
              <Heading as="h1" size={["sm", "xl"]}>
                {title ?? page?.title}
              </Heading>
            </Fade>
            <Spacer minWidth="10" />
            <SimplePopover
              trigger="hover"
              placement="top-end"
              triggerContent={
                <Tab>
                  <Icon as={RiFileTextLine} w={6} h={6} />
                </Tab>
              }
              bodyContent={<Text>View Styled Page</Text>}
            />
            <SimplePopover
              trigger="hover"
              placement="top-end"
              triggerContent={
                <Tab disabled={!page}>
                  <Icon as={RiFileCodeLine} w={6} h={6} />
                </Tab>
              }
              bodyContent={<Text>View Raw Data</Text>}
            />
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel>{children}</TabPanel>
          <TabPanel>
            <Box p="2">
              <CustomCode fontSize="xs">
                {JSON.stringify(page, null, 2)}
              </CustomCode>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
