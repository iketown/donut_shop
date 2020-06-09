import React from "react";
import DonutControls from "../components/controls/DonutControls";
import { Container } from "@material-ui/core";

const LocalStatePage = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <DonutControls />
    </Container>
  );
};

export default LocalStatePage;
