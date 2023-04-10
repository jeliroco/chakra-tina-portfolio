import {
  grid,
  Grid,
  GridItem,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { cleanupStyle } from "../.tina/cleanupStyle";
import { TinaTemplate } from "./TinaTemplate";

export const CustomGrid = (props) => {
  const { gridItems, children, ...rest } = props;
  const style = cleanupStyle(props.style);
  const numItems = useBreakpointValue(
    style?.numItems ?? { base: Number.MAX_SAFE_INTEGER }
  );

  return (
    <Grid
      w="100%"
      gap={4}
      gridTemplateRows={style?.gridTemplateRows}
      gridTemplateColumns={style?.gridTemplateColumns}
    >
      {gridItems?.map((gridItem, i) => {
        if (
          i <
          (numItems != null ? parseFloat(numItems) : Number.MAX_SAFE_INTEGER)
        ) {
          return <TinaTemplate key={i} template={gridItem} />;
        }
      })}
    </Grid>
  );
};
