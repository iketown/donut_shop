import React from "react";
import DonutControlsLocal from "../components/controls/DonutControlsLocal";
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
      <DonutControlsLocal />
    </Container>
  );
};

export default LocalStatePage;
