// import from tina
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "./TinaMarkdownComponents";

import { HeroImage } from "./HeroImage";
import { CustomGrid } from "./CustomGrid";
import { CustomVideo } from "./CustomVideo";
import { Center, Container, Text } from "@chakra-ui/react";
import { StyleBox } from "./StyleBox";

export function TinaTemplate(props) {
  const { template, ...rest } = props;
  //return <pre>{JSON.stringify(template)}</pre>;
  if (template?.__typename && template?.__typename.endsWith("ContentArea")) {
    return <TinaMarkdown content={template?.content} components={components} />;
  }
  if (template?.__typename && template?.__typename.endsWith("HeroImage")) {
    return <HeroImage {...template} />;
  }
  if (template?.__typename && template?.__typename.endsWith("Grid")) {
    return <CustomGrid {...template}></CustomGrid>;
  }
  if (template?.__typename && template?.__typename.endsWith("Video")) {
    return <CustomVideo {...template}></CustomVideo>;
  }
  if (
    (template?.__typename && template?.__typename.endsWith("image")) ||
    (template?._template && template?._template.endsWith("image"))
  ) {
    return (
      <Container width="100%" maxWidth="768px" p="0">
        <StyleBox p={0}>
          <img src={template?.url} />
        </StyleBox>
        {template?.caption && (
          <Center pt="2">
            <Text>{template?.caption}</Text>
          </Center>
        )}
      </Container>
    );
  }
}
