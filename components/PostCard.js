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
  Spacer,
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
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <CustomLink
        display="block"
        height="100%"
        width="100%"
        key={post.id}
        href={`/posts/${post._sys.filename}`}
      >
        <Button {...rest} alignItems="stretch" w="100%" h="100%" p="2">
          <Box width="100%" h="100%">
            <Stack direction={["row", "column"]} h="100%" alignItems="stretch">
              {post?.thumbnail && (
                <StyleBox
                  p={0}
                  maxWidth={["128px", "none"]}
                  maxHeight={["100px", "100px", "100px", "110px", "128px"]}
                  minWidth={["100px", "100%"]}
                  overflow="hidden"
                >
                  <Image
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    src={post?.thumbnail}
                  />
                </StyleBox>
              )}
              <VStack flex="1">
                <Box w="100%">
                  <Text whiteSpace={"initial"}>{post?.title}</Text>
                </Box>
                <Spacer mt={"0 !important"}></Spacer>
                <FormattedDate
                  fontSize="xs"
                  date={post?.metadata?.createdAt}
                />{" "}
                <Text fontSize="xs">
                  tags: {post?.tags.map((t) => t.tag).join(", ")}
                </Text>
              </VStack>
            </Stack>
          </Box>
        </Button>
      </CustomLink>
    </motion.div>
  );
};
