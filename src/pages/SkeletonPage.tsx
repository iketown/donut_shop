import { Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import React, { useState } from "react";

import BoxButtons from "../components/BoxButtons";
import DonutControls from "../components/controls/DonutControls";
import Donut from "../components/Donut";
import DonutBox from "../components/DonutBox";
import InfoPanel from "../components/infoPanel/InfoPanel";
import GridColumn from "../components/layout/GridColumn";
import GridContainer from "../components/layout/GridContainer";
import OrderBoard from "../components/orderBoard/OrderBoard";
import OrdersDrawer from "../components/OrdersDrawer";
import Receipt from "../components/receipt/Receipt";
import { fakeBox, fakeDonut } from "../constants/fakeInfo";

const SkeletonPage = () => {
  //  Dont change this component - make a copy and change the copy.
  const [showOrders, setShowOrders] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
        }}
      >
        <Button color="primary" onClick={() => setShowOrders(!showOrders)}>
          Orders
          <ChevronRight />
        </Button>
      </div>
      <OrdersDrawer {...{ showOrders, setShowOrders }}>
        <OrderBoard
          orders={{
            paid: {
              "123": fakeBox,
              a: {
                ...fakeBox,
                id: "043",
                donuts: [fakeDonut, fakeDonut, fakeDonut, fakeDonut, fakeDonut],
              },
            },
            unpaid: {
              "040": {
                ...fakeBox,
                id: "040",
                donuts: [fakeDonut, fakeDonut, fakeDonut, fakeDonut],
              },
            },
          }}
        />
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

export default SkeletonPage;
