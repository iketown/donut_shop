import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import OrdersDrawer from "../components/OrdersDrawer";
import OrderBoard from "../components/orderBoard/OrderBoard";
import DonutControls from "../components/controls/DonutControls";
import InfoPanel from "../components/infoPanel/InfoPanel";
import DonutBox from "../components/DonutBox";
import BoxButtons from "../components/BoxButtons";
import Receipt from "../components/receipt/Receipt";
import { fakeBox } from "../constants/fakeInfo";
import Donut from "../components/Donut";
import GridContainer from "../components/layout/GridContainer";
import GridColumn from "../components/layout/GridColumn";

const ContextPage = () => {
  const [showOrders, setShowOrders] = useState(false);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="primary" onClick={() => setShowOrders(!showOrders)}>
          Orders
          <ChevronRight />
        </Button>
      </div>
      <OrdersDrawer {...{ showOrders, setShowOrders }}>
        <OrderBoard openOrders={{ "042": fakeBox }} closedOrders={{}} />
      </OrdersDrawer>
      <GridContainer>
        <GridColumn>
          <DonutControls />
        </GridColumn>
        <GridColumn rightSide>
          <InfoPanel />
          <DonutBox>
            {fakeBox.donuts.map((donutInfo) => (
              <Donut key={donutInfo.id} {...donutInfo} />
            ))}
          </DonutBox>
          <BoxButtons box={fakeBox} />
          <Receipt />
        </GridColumn>
      </GridContainer>
    </>
  );
};

export default ContextPage;
