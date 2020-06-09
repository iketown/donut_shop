import React from "react";
import Receipt from "./Receipt";
import { fakeBox } from "../../constants/fakeInfo";
import styled from "styled-components";

export const ReceiptWithContext = () => {
  return <Receipt box={fakeBox} />;
};

const PaidText = styled.div`
  position: absolute;
  font-weight: bold;
  top: 65%;
  left: 50%;
  color: red;
  font-size: 2.5rem;
  text-align: center;
  transform: translate(-50%, -50%) rotate(-20deg);
  opacity: 0.5;
`;

export const ReceiptWithRedux = () => {
  return (
    <Receipt box={fakeBox}>
      {fakeBox.paid && (
        <PaidText>
          <div>PAID</div>
          <div>{fakeBox.paid}</div>
        </PaidText>
      )}
    </Receipt>
  );
};
