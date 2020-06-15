import React from "react";
import styled from "styled-components";
import { pink } from "@material-ui/core/colors";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

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
  orders,
  onClickOrder,
}: {
  onClickOrder?: (orderId: string) => void;
  orders?: OrderState;
}) => {
  const paid = orders?.paid;
  const unpaid = orders?.unpaid;
  const getOrderList = (boxes: { [id: string]: Box }) => (
    <List dense>
      {boxes &&
        Object.entries(boxes).map(([id, box]) => {
          const onClick = () => {
            onClickOrder && onClickOrder(id);
          };
          return <OrderListItem key={id} box={box} onClick={onClick} />;
        })}
    </List>
  );
  return (
    <OrderContainer data-testid="order-board">
      <div className="title">Open</div>
      {unpaid && getOrderList(unpaid)}
      <div className="title">Paid</div>
      {paid && getOrderList(paid)}
    </OrderContainer>
  );
};

const OrderListItem = ({
  box,
  onClick,
}: {
  box: Box;
  onClick?: () => void;
}) => {
  return (
    <ListItem button onClick={onClick} data-testid={`order-${box.id}`}>
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
