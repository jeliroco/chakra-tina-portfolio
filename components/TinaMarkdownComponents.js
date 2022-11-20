import {
  Button,
  Code,
  Container,
  Center,
  Heading,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

import { CustomLink } from "./CustomLink";
import { RandomText } from "./RandomText";

export const components = {
  a: (props) => {
    return <CustomLink href={props?.href ?? "/"}>{props?.children}</CustomLink>;
  },
  img: (props) => {
    return (
      <Container width="100%" maxWidth="768px" p="6">
        <Image src={props?.url} />
        <Center>
          <Text>{props.caption}</Text>
        </Center>
      </Container>
    );
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
  code: (props) => {
    return (
      <Code pb="2">
        <pre>{props.children}</pre>
      </Code>
    );
  },
  RandomText: (props) => {
    return (
      <RandomText
        textArray={props?.text}
        bold={props?.bold}
        italic={props?.italic}
      />
    );
  },
  Button: (props) => {
    return (
      <Box>
        <Button >
          <CustomLink href={props?.href ?? "/"}>{props?.text}</CustomLink>
        </Button>
      </Box>
    );
  },
};
