import React from "react";
import { Container } from "../controls/DonutControls";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { Dispatch } from "redux";

const OrderContainer = styled(Container)`
  .title {
    text-align: center;
    font-family: "Chelsea Market", cursive;
    font-size: 27px;
    color: #000000b3;
  }
`;

const OrderBoard = ({
  savedBoxes,
  openOrders,
  closedOrders,
  dispatch,
}: {
  savedBoxes?: { [id: string]: Box };
  openOrders?: { [id: string]: Box };
  closedOrders?: { [id: string]: Box };
  dispatch?: Dispatch<any>;
}) => {
  const getOrderList = (header: string, boxes: { [id: string]: Box }) => (
    <>
      <div className="title">{header}</div>
      <List dense>
        {boxes &&
          Object.entries(boxes).map(([id, box]) => {
            return <OrderListItem key={id} box={box} dispatch={dispatch} />;
          })}
      </List>
    </>
  );
  return (
    <OrderContainer data-testid="order-board">
      {savedBoxes && getOrderList("Orders", savedBoxes)}
      {openOrders && getOrderList("Open", openOrders)}
      {closedOrders && getOrderList("Closed", closedOrders)}

      {/* <small>renders: {renderCount.current++}</small> */}
    </OrderContainer>
  );
};

const OrderListItem = ({
  box,
  dispatch,
}: {
  box: Box;
  dispatch?: Dispatch;
}) => {
  const handleSelect = () => {
    dispatch && dispatch({ type: "LOAD_BOX", payload: { box } });
  };
  return (
    <ListItem button onClick={handleSelect} data-testid={`order-${box.id}`}>
      <ListItemAvatar>
        <b>{box.id}</b>
      </ListItemAvatar>
      <ListItemText
        primary={`${box.donuts.length} ${
          box.donuts.length > 1 ? "donuts" : "donut"
        }`}
      />
    </ListItem>
  );
};

export default OrderBoard;
