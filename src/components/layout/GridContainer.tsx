import React from "react";
import { Container, Grid, GridProps } from "@material-ui/core";

const gridContainerProps: GridProps = {
  container: true,
  spacing: 2,
  justify: "center",
  alignItems: "flex-start",
};

const GridContainer: React.FC = ({ children }) => {
  return (
    <Container fixed maxWidth="sm">
      <Grid {...gridContainerProps}>{children}</Grid>
    </Container>
  );
};

export default GridContainer;
