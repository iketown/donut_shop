import React from "react";
import { GridProps, Grid } from "@material-ui/core";
const gridItemProps: GridProps = {
  container: true,
  item: true,
  xs: 12,
  alignItems: "center",
  justify: "flex-start",
  direction: "column",
};

const GridColumn = ({
  children,
  rightSide,
}: {
  children?: any;
  rightSide?: boolean;
}) => {
  return (
    <Grid {...gridItemProps} sm={rightSide ? 8 : 4}>
      {children}
    </Grid>
  );
};

export default GridColumn;
