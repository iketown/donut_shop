import React from "react";

interface ReceiptLineItemI {
  quantity?: number;
  description: string;
  price: number;
  testId?: string;
}
const ReceiptLineItem = ({
  quantity,
  description,
  price,
}: ReceiptLineItemI) => {
  // dont edit this component
  return (
    <>
      <div style={{ gridColumn: "quantity" }}>{quantity}</div>
      <div style={{ gridColumn: "description" }}>{description}</div>
      <div style={{ gridColumn: "price" }}>${price.toFixed(2)}</div>
    </>
  );
};

export default ReceiptLineItem;
