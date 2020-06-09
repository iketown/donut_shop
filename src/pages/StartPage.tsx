import { Container, Grid, GridProps, Typography } from "@material-ui/core";
import React from "react";

import Donut from "../components/Donut";
import DonutBox from "../components/DonutBox";
import DonutControls from "../components/controls/DonutControls";
import InfoPanel from "../components/infoPanel/InfoPanel";
import OrderBoard from "../components/orderBoard/OrderBoard";
import Receipt from "../components/receipt/Receipt";
import { fakeBox, fakeDonut } from "../constants/fakeInfo";

const StartPage = () => {
  const gridItemProps: GridProps = {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    container: true,
    justify: "flex-start",
    direction: "column",
    alignItems: "center",
  };
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Grid container spacing={4}>
        <Grid {...gridItemProps}>
          <Title>Donut</Title>
          <Donut frostingColor="blue" sprinkles={true} />
        </Grid>
        <Grid {...gridItemProps}>
          <Title>Donut Controls</Title>
          <DonutControls />
        </Grid>
        <Grid {...gridItemProps}>
          <Title>Donut Box</Title>
          <DonutBox></DonutBox>
        </Grid>
        <Grid {...gridItemProps}>
          <Title>Receipt</Title>
          <Receipt box={fakeBox} />
        </Grid>
        <Grid {...gridItemProps}>
          <Title>Order Board</Title>
          <OrderBoard
            savedBoxes={{
              "0001": fakeBox,
              "0002": fakeBox,
            }}
          />
        </Grid>
        <Grid {...gridItemProps}>
          <Title>Info Panel</Title>
          <InfoPanel donut={fakeDonut} />
        </Grid>
      </Grid>
    </Container>
  );
};

const Title: React.FC = ({ children }) => (
  <div
    style={{
      padding: "1rem",
      margin: "1rem",
      border: "1px dotted grey",
      background: "white",
      textAlign: "center",
    }}
  >
    <Typography variant="h4">{children}</Typography>
  </div>
);

export default StartPage;
