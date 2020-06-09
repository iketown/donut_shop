import React from "react";
import Donut from "../Donut";
import FrostingColorSelector from "./FrostingColorSelector";
import GlazeColorRadio from "./GlazeColorRadio";
import SprinklesCheckbox from "./SprinklesCheckbox";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import woodBG from "../../images/wood-bg.jpg";

export const Container = styled.div<{ disabled?: boolean }>`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(#ffffff55, #ffaac73b 80%), url(${woodBG});
  background-size: cover;
  padding: 2rem 1rem;
  border-radius: 1rem;
  max-width: fit-content;
  width: 150px;
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
        <Donut />
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
        <GlazeColorRadio />
      </Box>
    </Container>
  );
};

export default DonutControls;
