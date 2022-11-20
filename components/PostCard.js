// import from Chakra
import {
  Text,
  Box,
  Image,
  Stack,
  VStack,
  Button,
  Drawer,
  Collapse,
  Fade,
  SlideFade,
} from "@chakra-ui/react";
import { StyleBox } from "./StyleBox";
import { FormattedDate } from "./FormattedDate";
import { CustomLink } from "./CustomLink";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const PostCard = (props) => {
  const { post, loadDelay = 0, children, ...rest } = props;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, loadDelay);
  }, []);

  return (
    <motion.div
      initial={{ originY: 0, scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, y: 0, opacity: 1 }}
      transition={{
        delay: loadDelay * 0.002,
        ease: "easeInOut",
        type: "spring",
        duration: 1,
      }}
    >
      <CustomLink key={post.id} href={`/posts/${post._sys.filename}`}>
        <Button w="100%" h={"fit-content"} {...rest} p="2">
          <Box width="100%">
            <Stack direction={["row", "column"]} justifyItems="start">
              {post?.thumbnail && (
                <StyleBox p={0} maxWidth={["128px"]} minWidth="100%">
                  <Image src={post?.thumbnail} />
                </StyleBox>
              )}
              <VStack>
                <Text>{post.title}</Text>
                <FormattedDate
                  fontSize="xs"
                  date={post.metadata.createdAt}
                />
              </VStack>
            </Stack>
          </Box>
        </Button>
      </CustomLink>
    </motion.div>
  );
};
