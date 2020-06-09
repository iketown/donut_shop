type Donut = {
  id?: string;
  frostingColor: string;
  glazeColor: string;
  sprinkles: boolean;
  description?: string;
  price?: number;
};

type DonutReceiptObj = {
  [description: string]: { quantity: number; price: number };
  totalPrice?: number;
};
