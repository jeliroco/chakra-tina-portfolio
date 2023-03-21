import { AspectRatio, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { cleanupStyle } from "../.tina/cleanupStyle";
import { CustomLink } from "./CustomLink";
import { StyleBox } from "./StyleBox";
import { Image } from '@chakra-ui/react'

export const CustomImage = (props) => {
  const { children, colorScheme, ...rest } = props;

  return (
    <StyleBox p={3}>
      <StyleBox p={0} mb={3}>
        {props?.aspectRatio && (
          <AspectRatio ratio={props?.aspectRatio}>
            <Image src={props?.url} />
          </AspectRatio>
        )}
        {!props?.aspectRatio && <Image src={props?.url} width="100%" />}
      </StyleBox>
      {props?.caption && (
        <Text textAlign={"center"}>
          {props?.caption}
        </Text>
      )}
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
