import React from "react";
import Donut from "../Donut";
import FrostingColorSelector from "./FrostingColorSelector";
import GlazeFlavorRadio from "./GlazeFlavorRadio";
import SprinklesCheckbox from "./SprinklesCheckbox";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import oldWood from "../../images/oldwood.jpg";
export const Container = styled.div<{ disabled?: boolean }>`
  margin: 1rem;
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

export const DonutControls = () => {
  return (
    <Container data-testid="control-panel">
      <Box mb={4}>
        <Donut size={120} />
      </Box>
      <Box mb={2}>
        <Button>random</Button>
      </Box>
      <Box mb={2}>
        <FrostingColorSelector />
      </Box>
      <Box mb={2}>
        <SprinklesCheckbox />
      </Box>
      <Box mb={2}>
        <GlazeFlavorRadio />
      </Box>
    </Container>
  );
};

export default DonutControls;
