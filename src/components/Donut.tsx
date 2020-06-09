import React, { useRef } from "react";
import Dough from "../donuts/Dough";
import Frosting from "../donuts/Frosting";
import Sprinkles from "../donuts/Sprinkles";
import Glaze from "../donuts/Glaze";
import styled from "styled-components";

const DonutDiv = styled.div<{
  selected?: boolean;
  size: number;
  rotation: number;
}>`
  position: relative;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  .ingredient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: rotate(${(p) => p.rotation}deg);
  }
  transition: transform 0.5s;
  transform: ${(p) => (p.selected ? "scale(1.1)" : "")};
  z-index: ${(p) => (p.selected ? 2 : 1)};
  .isSelected {
    background: #00000033;
  }
`;

const SelectedCircle = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  border-radius: 50%;
`;

const Donut = ({
  frostingColor,
  selected,
  onClick = () => console.log("clicked donut"),
  sprinkles,
  glazeColor,
  rotation,
  size = 100,
  id,
}: {
  frostingColor?: string;
  glazeColor?: string;
  selected?: boolean;
  onClick?: () => void;
  sprinkles?: boolean;
  rotation?: number;
  size?: number;
  id?: string;
}) => {
  let _rotation = useRef(Math.random() * 360);
  return (
    <DonutDiv
      className="donut"
      data-testid={`donut`}
      rotation={rotation || _rotation.current}
      {...{ selected, onClick, size }}
    >
      <SelectedCircle
        data-testid={`selected-circle`}
        className={`selected-circle ${selected ? "isSelected" : ""}`}
      />
      <div className="ingredient">
        <Dough />
      </div>
      <div className="ingredient">
        <Frosting color={frostingColor} />
      </div>
      <div className="ingredient">
        <Glaze {...{ glazeColor }} />
      </div>
      {sprinkles && (
        <div className="ingredient" data-testid="sprinkles">
          <Sprinkles />
        </div>
      )}
    </DonutDiv>
  );
};

export default Donut;
