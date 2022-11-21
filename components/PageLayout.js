// import from chakra
import { VStack } from "@chakra-ui/react";
import { OSLayout } from "./OSLayout";
import { TinaTemplate } from "./TinaTemplate";

export default function PageLayout(props) {
  const { page, ...rest } = props;

  return (
    <OSLayout page={page} {...rest}>
      <VStack p="4" gap="4" alignItems="stretch">
        {page?.blocks?.map((block, i) => {
          return <TinaTemplate key={i} template={block} />;
        })}
      </VStack>
    </OSLayout>
  );
}
