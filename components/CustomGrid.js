import { grid, Grid, GridItem, VStack } from "@chakra-ui/react";
import { cleanupStyle } from "../.tina/cleanupStyle";
import { TinaTemplate } from "./TinaTemplate";

export const CustomGrid = (props) => {
  const { gridItems, style, children, ...rest } = props;
  return (
    <Grid w="100%" gap={4} {...cleanupStyle(style)}>
      {gridItems?.map((gridItem, i) => {
        return (
          <TinaTemplate
            key={i}
            template={gridItem}
          />
        );
      })}
    </Grid>
  );
};
