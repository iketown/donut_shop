import React from "react";
import { Container } from "../controls/DonutControls";
import styled from "styled-components";
import { cyan, pink } from "@material-ui/core/colors";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { Dispatch } from "redux";

const OrderContainer = styled.div`
  padding: 1rem;
  min-width: 10rem;
  .title {
    text-align: center;
    font-family: "Chelsea Market", cursive;
    font-size: 24px;
    color: ${pink[100]};
  }
`;

const OrderBoard = ({
  openOrders,
  closedOrders,
  dispatch,
}: {
  openOrders?: { [id: string]: Box };
  closedOrders?: { [id: string]: Box };
  dispatch?: Dispatch<any>;
}) => {
  const getOrderList = (boxes: { [id: string]: Box }) => (
    <List dense>
      {boxes &&
        Object.entries(boxes).map(([id, box]) => {
          return <OrderListItem key={id} box={box} dispatch={dispatch} />;
        })}
    </List>
  );
  return (
    <OrderContainer data-testid="order-board">
      <div className="title">Open</div>
      {openOrders && getOrderList(openOrders)}
      <div className="title">Closed</div>
      {closedOrders && getOrderList(closedOrders)}
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
        <div>
          #<b>{box.id}</b>
        </div>
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
