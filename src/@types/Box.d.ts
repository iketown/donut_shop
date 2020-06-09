type Box = {
  id?: string;
  selectedId?: string;
  donuts: Donut[];
  paid?: string;
};

type BoxAction = {
  type: string;
  payload: BoxPayload;
};

type BoxPayload = {
  newDonut?: Donut;
  donutId?: string;
  quantity?: number;
  boxId?: string;
  box?: Box;
  nextId?: string;
};

type BoxContext = {
  state: Box;
  dispatch: React.Dispatch<BoxAction>;
  boxSize: number;
};

type OrderContext = {};
