// import from tina
import { TinaMarkdown } from "tinacms/dist/rich-text";
// import from chakra
import { VStack } from "@chakra-ui/react";
import { components } from "./TinaMarkdownComponents";

import { HeroImage } from "./HeroImage";
import { OSLayout } from "./OSLayout";

export default function PageLayout(props) {
  const { page, ...rest } = props;

  return (
    <OSLayout page={page} {...rest}>
      <VStack p="4" gap="4" alignItems="stretch">
        {page.blocks?.map((pageBlock, i) => {
          switch (pageBlock.__typename) {
            case "PageBlocksContentArea":
              return (
                <TinaMarkdown
                  key={i}
                  content={pageBlock?.content}
                  components={components}
                />
              );
            case "PageBlocksHeroImage":
              return <HeroImage key={i} {...pageBlock} />;
          }
        })}
      </VStack>
    </OSLayout>
  );
}
