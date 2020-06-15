import React from "react";
import { Drawer, Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import styled from "styled-components";
import oldwood from "../images/oldwood.jpg";
//
//

const DrawerBG = styled.div`
  background: #373737;
  background-image: linear-gradient(rgba(44, 21, 13, 0.71), rgba(0, 0, 0, 0.71)),
    url(${oldwood});
  background-size: 100%;
  background-repeat: repeat-y;
  height: 100%;
  color: white;
  border-right: 3px solid silver;
`;
interface OrdersDrawerI {
  showOrders?: boolean;
  setShowOrders: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
}
const OrdersDrawer: React.FC<OrdersDrawerI> = ({
  showOrders,
  setShowOrders,
  children,
}: OrdersDrawerI) => {
  return (
    <Drawer
      anchor="left"
      // variant="persistent"
      open={showOrders}
      onClose={() => setShowOrders(false)}
      data-testid="drawer"
    >
      <DrawerBG>
        <Button color="inherit" onClick={() => setShowOrders(false)}>
          <ChevronLeft />
          OK
        </Button>
        {children}
      </DrawerBG>
    </Drawer>
  );
};

export default OrdersDrawer;
