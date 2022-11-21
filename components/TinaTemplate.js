// import from tina
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "./TinaMarkdownComponents";

import { HeroImage } from "./HeroImage";
import { CustomGrid } from "./CustomGrid";
import { CustomVideo } from "./CustomVideo";

export function TinaTemplate(props) {
  const { template, ...rest } = props;

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
}
