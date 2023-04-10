import {
  Button,
  Code,
  Container,
  Center,
  Heading,
  Image,
  Text,
  Box,
  ListItem,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";

import { CustomLink } from "./CustomLink";
import { RandomText } from "./RandomText";

import { ThemeContext } from "../theme/context";
import { useContext } from "react";
import { CustomCode } from "./CustomCode";
import { StyleBox } from "./StyleBox";
import { CustomVideo } from "./CustomVideo";
import { CustomImage } from "./CustomImage";
import { CustomGrid } from "./CustomGrid";
import { Signature } from "./Signature";
import { LottieAnimation } from "./LottieAnimation";

export const components = {
  a: (props) => {
    const context = useContext(ThemeContext);
    const colorScheme = context.colorScheme;
    return (
      <CustomLink colorScheme={colorScheme} href={props?.url ?? "/"}>
        {props?.children}
      </CustomLink>
    );
  },
  link: (props) => {
    const context = useContext(ThemeContext);
    const colorScheme = context.colorScheme;
    return (
      <CustomLink
        colorScheme={colorScheme}
        isExternal={props.isExternal}
        href={props?.url ?? "/"}
      >
        {props?.text}
      </CustomLink>
    );
  },
  // TODO: Figure out this hydration error
  // img: (props) => {
  //   return (
  //     <Container width="100%" maxWidth="768px" p="6">
  //       <StyleBox p={0}>
  //         <img src={props?.url} />
  //       </StyleBox>
  //       {props?.caption && (
  //         <Center pt="2">
  //           <Text>{props?.caption}</Text>
  //         </Center>
  //       )}
  //     </Container>
  //   );
  // },
  image: (props) => {
    return <CustomImage {...props} />;
  },
  ul: (props) => {
    return <UnorderedList>{props.children}</UnorderedList>;
  },
  ol: (props) => {
    return <OrderedList>{props.children}</OrderedList>;
  },
  li: (props) => {
    return <ListItem>{props.children}</ListItem>;
  },
  h1: (props) => {
    return (
      <Heading as="h1" size="xl">
        {props.children}
      </Heading>
    );
  },
  h2: (props) => {
    return (
      <Heading as="h2" size="lg">
        {props.children}
      </Heading>
    );
  },
  h3: (props) => {
    return (
      <Heading as="h3" size="md">
        {props.children}
      </Heading>
    );
  },
  h4: (props) => {
    return (
      <Heading as="h4" size="sm">
        {props.children}
      </Heading>
    );
  },
  h5: (props) => {
    return (
      <Heading as="h5" size="xs">
        {props.children}
      </Heading>
    );
  },
  h6: (props) => {
    return (
      <Heading as="h6" size="xs" fontStyle="italic">
        {props.children}
      </Heading>
    );
  },
  p: (props) => {
    return (
      <Text m="0 !important" p="0 !important">
        {props.children}
      </Text>
    );
  },
  code_block: (props) => {
    const context = useContext(ThemeContext);
    const colorScheme = context.colorScheme;
    return (
      <CustomCode colorScheme={colorScheme} pb="2">
        {props.value}
      </CustomCode>
    );
  },
  video: (props) => {
    return <CustomVideo {...props} />;
  },
  textArea: (props) => {
    return (
      <Box {...props.style}>
        <Text>{props.text}</Text>
      </Box>
    );
  },
  code: (props) => {
    return <CustomCode pb="2">{props.children}</CustomCode>;
  },
  RandomText: (props) => {
    return (
      <RandomText
        textArray={props?.texts}
        bold={props?.bold}
        italic={props?.italic}
      />
    );
  },
  Button: (props) => {
    return (
      <Box>
        <Button>
          <CustomLink href={props?.href ?? "/"}>{props?.text}</CustomLink>
        </Button>
      </Box>
    );
  },
  grid: (props) => {
    return <CustomGrid {...props} />;
  },
  signature: (props) => {
    return <Signature {...props} />;
  },
  lottie: (props) => {
    return <LottieAnimation {...props}/>
  }
};
