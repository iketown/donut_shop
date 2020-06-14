import React, { useRef } from "react";
import Dough from "../donuts/Dough";
import Shadow from "../donuts/Shadow";
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

  .shadow {
    transition: 0.3s all;
    position: absolute;
    top: 5%;
    left: 5%;
    bottom: -5%;
    right: -5%;
  }
  .ingredient {
    transition: 0.3s all;
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
    background: linear-gradient(to left, #ffa500f0, #ffff00c4);
    filter: blur(5px);
  }
  &:hover {
    .shadow {
      opacity: 0.8;
      filter: blur(2px);
      top: 6%;
      left: 6%;
      bottom: -6%;
      right: -6%;
    }
    .ingredient {
      top: -1%;
      left: -1%;
      bottom: 1%;
      right: 1%;
    }
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
  glazeFlavor,
  rotation,
  size = 83,
  id,
}: {
  frostingColor?: string;
  glazeFlavor?: string;
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
      <div className="shadow">
        <Shadow />
      </div>
      <div className="ingredient">
        <Dough />
      </div>
      <div className="ingredient">
        <Frosting color={frostingColor} />
      </div>
      <div className="ingredient">
        <Glaze {...{ glazeFlavor }} />
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
