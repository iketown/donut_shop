import React from "react";
import Donut from "../Donut";
import FrostingColorSelector from "./FrostingColorSelector";
import GlazeFlavorRadio from "./GlazeFlavorRadio";
import SprinklesCheckbox from "./SprinklesCheckbox";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import oldWood from "../../images/oldwood.jpg";
import QuantityButtons from "./QuantityButtons";

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
  frostingColor,
  setFrostingColor,
  sprinkles,
  setSprinkles,
  glazeFlavor,
  setGlazeFlavor,
}: DonutControlsI) => {
  return (
    <Container data-testid="control-panel">
      <Box mb={4}>
        <Donut size={120} />
      </Box>
      <Box mb={2}>
        <Button>random</Button>
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
