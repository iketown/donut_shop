import React from "react";
import {
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormControl,
} from "@material-ui/core";
import { donutOptions } from "../../constants/donutOptions";

interface ColorRadioI {
  color?: string;
  setColor?: (color: string) => void;
}
const GlazeColorRadio = ({ color, setColor }: ColorRadioI) => {
  const options = donutOptions.glazeColor;
  return (
    <FormControl>
      <FormLabel>Glaze</FormLabel>
      <RadioGroup
        value={color}
        onChange={(e, val) => setColor && setColor(val)}
        aria-label="position"
        name="position"
        defaultValue="top"
      >
        {options?.map((flavor: string) => {
          return (
            <FormControlLabel
              key={flavor}
              value={flavor}
              control={<Radio color="primary" />}
              label={flavor}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default GlazeColorRadio;
