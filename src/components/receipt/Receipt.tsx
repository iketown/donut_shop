import React from "react";
import styled from "styled-components";
import ReceiptLineItem from "./ReceiptLineItem";
import ReceiptBackground from "./ReceiptBackground";
import { prices } from "../../constants/donutOptions";
//
//

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns:
    [quantity] max-content [description] 1fr [price]
    max-content;
  grid-gap: 5px;
`;

const ReceiptClip = ({ box, children }: { box: Box; children?: any }) => {
  const donuts = box.donuts;

  const donutsWithInfo = donuts.map((donut) => {
    let price = prices.donut;
    const sprinklePrice = prices.sprinkles;
    if (donut.sprinkles) price += sprinklePrice;
    const { frostingColor, glazeColor, sprinkles } = donut;
    let description = frostingColor;
    if (glazeColor !== "none") description += ` ${glazeColor}`;
    if (sprinkles) description += ` spkls(+$${sprinklePrice})`;
    return { ...donut, price, description };
  });

  const donutObj = donutsWithInfo.reduce((obj: DonutReceiptObj, donut) => {
    const { description, price } = donut;
    if (obj[description]) {
      obj[description].quantity++;
      obj[description].price += price;
    } else {
      obj[description] = { quantity: 1, price };
    }
    return obj;
  }, {});

  const totalPrice = Object.values(donutObj).reduce((sum, info) => {
    const { price } = info;
    sum += price;
    return sum;
  }, 0);

  const Content = styled.div`
    min-height: 200px;
    position: relative;
    color: #383838;
    padding: 2rem 1rem;
    font-family: Inconsolata, monospace;
    font-size: 14px;
  `;

  return (
    <ReceiptBackground>
      <Content>
        <div
          style={{
            fontFamily: "Chelsea Market",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Donut Shop
        </div>
        <div style={{ textAlign: "center" }}>order # {box.id}</div>
        <Divider />
        <ItemsGrid>
          {Object.entries(donutObj).map(([description, info]) => {
            const { quantity, price } = info;
            return (
              <ReceiptLineItem
                key={description}
                {...{ description, price, quantity }}
              />
            );
          })}
          <Divider />
          <ReceiptLineItem description="subtotal" price={totalPrice} />
          <ReceiptLineItem
            description="tax"
            price={totalPrice * prices.taxRate}
          />
          <ReceiptLineItem
            description="TOTAL"
            price={totalPrice * (prices.taxRate + 1)}
          />
        </ItemsGrid>
      </Content>
      {children}
    </ReceiptBackground>
  );
};

export default ReceiptClip;

const Divider = () => (
  <div style={{ textAlign: "center", opacity: 0.5, gridColumn: "1/-1" }}>
    ------------------------
  </div>
);