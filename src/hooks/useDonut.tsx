import { useState } from "react";
import getRandomDonut from "../helpers/getRandomDonut";

export const useDonut = () => {
  const [glazeFlavor, setGlazeFlavor] = useState("");
  const [sprinkles, setSprinkles] = useState(false);
  const [frostingColor, setFrostingColor] = useState("");

  const handleRandom = () => {
    const { frostingColor, sprinkles, glazeFlavor } = getRandomDonut();
    setGlazeFlavor(glazeFlavor);
    setSprinkles(sprinkles);
    setFrostingColor(frostingColor);
  };

  return {
    glazeFlavor,
    setGlazeFlavor,
    sprinkles,
    setSprinkles,
    frostingColor,
    setFrostingColor,
    handleRandom,
  };
};
