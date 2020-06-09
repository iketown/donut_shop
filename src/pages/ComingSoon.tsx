import React from "react";
import { Container, Typography } from "@material-ui/core";
import Donut from "../components/Donut";
import { getRandomDonut } from "../constants/donutOptions";

const ComingSoon = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90%",
      }}
    >
      <Typography gutterBottom variant="h3">
        Coming Soon
      </Typography>
      <Donut {...getRandomDonut()} />
    </Container>
  );
};

export default ComingSoon;
