import { Box, Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import oldWood from "../../images/oldwood.jpg";
import Donut from "../Donut";
import FrostingColorSelector from "./FrostingColorSelector";
import GlazeFlavorRadio from "./GlazeFlavorRadio";
import QuantityButtons from "./QuantityButtons";
import SprinklesCheckbox from "./SprinklesCheckbox";

export const Container = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom left,
      #ffdde98c,
      #ffffff75,
      #99e2db57
    ),
    url(${oldWood});
  background-size: 100%;
  background-repeat: repeat-y;
  padding: 1rem;
  border-radius: 1rem;
  max-width: fit-content;
  transition: 0.3s box-shadow, opacity;
  box-shadow: 3px 3px 3px #00000038;
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  &:hover {
    box-shadow: 5px 5px 5px #00000038;
  }
`;

interface DonutControlsI {
  quantity?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  maxQuantity?: number;
  disableButtons?: boolean;
  handleAddToBox?: () => void;
  handleRandom?: () => void;
  frostingColor?: string;
  setFrostingColor?: (color: string) => void;
  glazeFlavor?: string;
  setGlazeFlavor?: (flavor: string) => void;
  sprinkles?: boolean;
  setSprinkles?: (sprinkles: boolean) => void;
}

export const DonutControls = ({
  quantity,
  setQuantity,
  maxQuantity,
  disableButtons,
  handleAddToBox,
  handleRandom,
  frostingColor,
  setFrostingColor,
  sprinkles,
  setSprinkles,
  glazeFlavor,
  setGlazeFlavor,
}: DonutControlsI) => {
  // dont edit this component directly.   make a wrapper.
  return (
    <Container data-testid="control-panel">
      <Box mb={4}>
        <Donut size={120} {...{ frostingColor, glazeFlavor, sprinkles }} />
      </Box>
      <Box mb={2}>
        <Button onClick={handleRandom}>random</Button>
      </Box>
      <Button
        disabled={disableButtons}
        onClick={() => handleAddToBox && handleAddToBox()}
        variant="contained"
        color="primary"
      >
        Add {quantity ? quantity : ""} to Box
      </Button>
      <Box mb={2}>
        <QuantityButtons {...{ quantity, setQuantity, maxQuantity }} />
      </Box>
      <Box mb={2}>
        <FrostingColorSelector {...{ frostingColor, setFrostingColor }} />
      </Box>
      <Box mb={2}>
        <SprinklesCheckbox {...{ sprinkles, setSprinkles }} />
      </Box>
      <Box mb={2}>
        <GlazeFlavorRadio {...{ glazeFlavor, setGlazeFlavor }} />
      </Box>
    </Container>
  );
};

export default DonutControls;
