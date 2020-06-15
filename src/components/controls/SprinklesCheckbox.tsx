import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

interface SprinklesCBI {
  sprinkles?: boolean;
  setSprinkles?: (chk: boolean) => void;
}
const SprinklesCheckbox = ({ sprinkles, setSprinkles }: SprinklesCBI) => {
  // dont edit this component
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={sprinkles}
          onChange={(e, chk) => setSprinkles && setSprinkles(chk)}
          name="sprinkles"
        />
      }
      label="Sprinkles"
    />
  );
};

export default SprinklesCheckbox;
