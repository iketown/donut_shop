type OrderState = {
  paid: { [id: string]: Box };
  unpaid: { [id: string]: Box };
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
