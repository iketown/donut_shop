import React from "react";
import { GridProps, Grid } from "@material-ui/core";

const gridItemProps: GridProps = {
  container: true,
  item: true,
  xs: 12,
  sm: 6,
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
  // dont edit this component
  return (
    <Grid {...gridItemProps} style={{ marginTop: "2rem" }}>
      {children}
    </Grid>
  );
};

export default GridColumn;
