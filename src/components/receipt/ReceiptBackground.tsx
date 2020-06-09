import React from "react";
import paper from "../../images/paper.jpg";
import styled from "styled-components";

const points = [];
const zigs = 60;
const ridgeHeight = 5;

for (let i = 0; i <= zigs + 1; i++) {
  const x = (i * 100) / zigs;
  const y = (i % 2) * 100;
  const node = [x, y];
  points.push(node);
}
points.push([0, 100]);
const clipPath = points.map(([x, y]) => `${x}% ${y}%`).join(", ");

const ShadowDiv = styled.div`
  filter: drop-shadow(3px 3px 3px rgba(50, 50, 0, 0.5));
  &:hover {
    filter: drop-shadow(5px 5px 5px rgba(50, 50, 0, 0.5));
  }
`;

const StyledEdge = styled.div<{ flip?: boolean }>`
  position: absolute;
  background-image: linear-gradient(
      to ${(p) => (p.flip ? "right" : "left")},
      #ffffff22,
      #ffffffaa
    ),
    url(${paper});
  background-size: cover;
  top: ${(p) => (p.flip ? "100%" : `-${ridgeHeight}px`)};
  left: 0;
  right: 0;
  width: 250px;
  height: ${ridgeHeight}px;
  clip-path: polygon(${clipPath});
  transform: rotate(${(p) => (p.flip ? "180deg" : "0")});
  ${(p) => (p.flip ? `` : ``)}
  z-index: 2;
`;
const MidSection = styled.div`
  background-image: linear-gradient(to left, #ffffff22, #ffffffaa),
    url(${paper});
  background-size: cover;
  position: relative;
  width: 250px;
  margin: 0;
  padding: 0;
  transition: 0.3s box-shadow, opacity;
`;

const ReceiptBackground: React.FC = ({ children }) => {
  return (
    <ShadowDiv>
      <MidSection>
        <StyledEdge />
        {children}
        <StyledEdge flip />
      </MidSection>
    </ShadowDiv>
  );
};

export default ReceiptBackground;
