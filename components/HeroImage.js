import { invertColor } from "../theme/color";
import { StyleBox } from "./StyleBox";
import { Box, Collapse, Image, SlideFade } from "@chakra-ui/react";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import { components } from "./TinaMarkdownComponents";

import { ThemeContext } from "../theme/context";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "tinacms";

import { motion } from "framer-motion";

export const HeroImage = (props) => {
  const context = useContext(ThemeContext);
  const c = context.colorScheme;

  const imageRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && imageRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const convertToPlacement = (placementString) => {
    switch (placementString) {
      case "left":
      case "top":
        return "start";
      case "right":
      case "bottom":
        return "end";
      case "center":
      default:
        return "center";
    }
  };
  if (props.published) {
    return (
      <motion.div
        initial={{ height: 0, scaleY: 0, opacity: 0 }}
        animate={{
          height: loaded ? "auto" : 0,
          scaleY: loaded ? 1 : 0,
          y: 0,
          opacity: loaded ? 1 : 0,
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ ease: "easeInOut", type: "spring", duration: 1 }}
      >
        <StyleBox p="3">
          <StyleBox position="relative" overflow="hidden" p={0}>
            <Image
              ref={imageRef}
              maxHeight={
                props?.imageStyle?.size?.height
                  ? `${props?.imageStyle?.size?.height}em`
                  : null
              }
              maxWidth={
                props?.imageStyle?.size?.width
                  ? `${props?.imageStyle?.size?.width}em`
                  : null
              }
              height="100%"
              width="100%"
              filter={props?.imageStyle?.filter ?? null}
              src={props?.image}
              objectFit={props?.imageStyle?.crop?.fit ?? null}
              objectPosition={props?.imageStyle?.crop?.position ?? null}
              onLoad={() => setLoaded(true)}
            ></Image>
            {props?.imageStyle?.applyThemeFilter && (
              <Box
                position="absolute"
                inset="0"
                opacity="0.8"
                mixBlendMode="color-burn"
                transition="transform 0.5s ease-out, background 0.5s ease-out"
                bg={`${c}.200`}
              ></Box>
            )}
            <Box
              position="absolute"
              inset="0"
              display="flex"
              alignItems={convertToPlacement(
                props?.contentStyle?.placement?.vertical
              )}
              justifyContent={convertToPlacement(
                props?.contentStyle?.placement?.horizontal
              )}
              px={
                props?.contentStyle?.padding?.horizontal !== undefined
                  ? `${props?.contentStyle?.padding?.horizontal}em`
                  : "2em"
              }
              py={
                props?.contentStyle?.padding?.vertical !== undefined
                  ? `${props?.contentStyle?.padding?.vertical}em`
                  : "2em"
              }
              color={props?.contentStyle?.color}
              textAlign={props?.contentStyle?.placement?.horizontal}
              textShadow={`2px 2px 1px black, -2px 2px 1px black, 2px -2px 1px black, -2px -2px 1px black`}
            >
              <Box>
                <TinaMarkdown
                  content={props?.content}
                  components={components}
                />
              </Box>
            </Box>
          </StyleBox>
          {props?.contentColor?.substring(1)}
        </StyleBox>
      </motion.div>
    );
  } else {
    return <></>;
  }
};
