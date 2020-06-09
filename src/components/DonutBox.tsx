import React from "react";
import box from "../images/box.jpg";
import styled from "styled-components";
import { pink } from "@material-ui/core/colors";

const StyledBox = styled.div<{ size: number }>`
  background-image: url(${box});
  background-size: cover;
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;
  box-shadow: 8px 7px 8px #0000004d;
  border: 1px solid ${pink[200]};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 5px;
`;
const DonutBox = ({
  size = 300,
  children,
}: {
  size?: number;
  children?: JSX.Element[];
}) => {
  return (
    <StyledBox data-testid="donut-box" size={size}>
      {children}
    </StyledBox>
  );
};

export default DonutBox;
