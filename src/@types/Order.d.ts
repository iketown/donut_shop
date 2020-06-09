type OrderState = {
  openOrders: { [id: string]: Box };
  closedOrders: { [id: string]: Box };
};

interface OrderAction {
  type: string;
  payload: OrderPayload;
}

interface OrderPayload {
  box?: Box;
  boxId?: string;
  orders: OrderState;
}
