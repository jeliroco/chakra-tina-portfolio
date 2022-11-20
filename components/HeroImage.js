import { invertColor } from "../theme/color";
import { StyleBox } from "./StyleBox";
import { Box, Collapse, Image, SlideFade } from "@chakra-ui/react";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import { components } from "./TinaMarkdownComponents";

import { ThemeContext } from "../theme/context";
import { useContext, useEffect, useState } from "react";
import { Button } from "tinacms";

import { motion } from "framer-motion";

export const HeroImage = (props) => {
  const context = useContext(ThemeContext);
  const c = context.colorScheme;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
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
  return (
    <motion.div
      initial={{ originY: 0, scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ ease: "easeInOut", type: "spring", duration: 1 }}
    >
      <StyleBox p="3">
        <StyleBox position="relative" overflow="hidden" p={0}>
          <Image
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
          ></Image>
          {props?.imageStyle?.applyThemeFilter && (
            <Box
              position="absolute"
              inset="0"
              opacity="0.8"
              style={{ mixBlendMode: "color-burn" }}
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
            textShadow={
              props?.contentStyle.color
                ? `2px 2px 1px ${invertColor(
                    props?.contentStyle.color
                      ? props?.contentStyle.color?.substring(1)
                      : "white"
                  )}, -2px 2px 1px ${invertColor(
                    props?.contentStyle.color
                      ? props?.contentStyle.color?.substring(1)
                      : "white"
                  )}, -2px -2px 1px ${invertColor(
                    props?.contentStyle.color
                      ? props?.contentStyle.color?.substring(1)
                      : "white"
                  )}, 2px -2px 1px ${invertColor(
                    props?.contentStyle.color
                      ? props?.contentStyle.color?.substring(1)
                      : "white"
                  )} 
                                  `
                : null
            }
          >
            <Box>
              <TinaMarkdown content={props?.content} components={components} />
            </Box>
          </Box>
        </StyleBox>
        {props?.contentColor?.substring(1)}
      </StyleBox>
    </motion.div>
  );
};
