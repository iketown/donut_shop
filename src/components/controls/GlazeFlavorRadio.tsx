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
  glazeFlavor?: string;
  setGlazeFlavor?: (color: string) => void;
}
const GlazeFlavorRadio = ({ glazeFlavor, setGlazeFlavor }: ColorRadioI) => {
  // dont edit this component
  const options = donutOptions.glazeFlavor;
  return (
    <FormControl>
      <FormLabel>Glaze</FormLabel>
      <RadioGroup
        value={glazeFlavor}
        onChange={(e, val) => setGlazeFlavor && setGlazeFlavor(val)}
        aria-label="position"
        name="position"
        defaultValue="top"
      >
        {options?.map((gFlavor: string) => {
          return (
            <FormControlLabel
              key={gFlavor}
              value={gFlavor}
              control={<Radio color="primary" />}
              label={gFlavor}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default GlazeFlavorRadio;
