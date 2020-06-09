import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React from "react";
import { donutOptions } from "../../constants/donutOptions";

const FrostingColorSelector = ({
  color,
  setColor,
}: {
  color?: string;
  setColor?: (color: string) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor && setColor(event.target.value as string);
  };
  const options = donutOptions.frostingColor;
  return (
    <div style={{ width: "9rem" }}>
      <FormControl fullWidth data-testid="color-control">
        <InputLabel htmlFor="color-select">Frosting</InputLabel>
        <Select
          fullWidth
          id="color-select"
          value={color || ""}
          onChange={handleChange}
        >
          {options.map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FrostingColorSelector;
