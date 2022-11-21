import { AspectRatio, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { cleanupStyle } from "../.tina/cleanupStyle";
import { CustomLink } from "./CustomLink";
import { StyleBox } from "./StyleBox";

export const CustomVideo = (props) => {
  const { children, colorScheme, ...rest } = props;

  return (
    <StyleBox p={3}>
      <StyleBox p={0}>
        <AspectRatio ratio={props.aspectRatio ?? 16 / 9}>
          <iframe
            src={props.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </StyleBox>
      {props?.description?.text && <Text {...cleanupStyle(props?.description?.style)}>{props?.description?.text}</Text>}
      {props?.link?.url && (
        <HStack w="100%" pt={2} justifyContent="end">
          <CustomLink href={props?.link?.url ?? "/"}>
            <Button>{props?.link?.text ?? "View Post >"}</Button>
          </CustomLink>
        </HStack>
      )}
    </StyleBox>
  );
};
