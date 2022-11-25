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
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const PostCard = (props) => {
  const { post, children, ...rest } = props;

  const [loadDelay, setLoadDelay] = useState(props?.loadDelay ?? 0);

  const imageRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!loaded && imageRef.current?.complete) {
        setLoaded(true);
      }
    }, loadDelay);
    setLoadDelay(0);
  }, [loaded]);

  return (
    <motion.div
      initial={{ originY: 0, scaleY: 0, opacity: 0 }}
      animate={{
        scaleY: loaded ? 1 : 0,
        y: 0,
        opacity: loaded ? 1 : 0,
      }}
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
                    ref={imageRef}
                    onLoad={() => setLoaded(true)}
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
