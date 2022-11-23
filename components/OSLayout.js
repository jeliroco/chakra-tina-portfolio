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
  Fade,
} from "@chakra-ui/react";
// import from react-icons
import { RiFileTextLine, RiFileCodeLine } from "react-icons/ri";
// import from components
import { SimplePopover } from "./SimplePopover";
import { CustomCode } from "./CustomCode";

import { useEffect, useState } from "react";

export const OSLayout = (props) => {
  const { title, page, dataTabEnabled = true, children, ...rest } = props;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Box>
      <Tabs>
        <TabList>
          <Flex w="100%" gap="2" alignItems={"center"}>
            <Fade in={loaded}>
              <Heading
                as="h1"
                noOfLines={[2, 2, 1]}
                size={["sm", "sm", "md", "lg", "xl"]}
              >
                {title ?? page?.title}
              </Heading>
            </Fade>
            <Spacer minWidth="0" />
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
                <Tab isDisabled={!dataTabEnabled || !page}>
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
