import React, { useState } from "react";
import DonutControls from "./DonutControls";
import getRandomDonut from "../../helpers/getRandomDonut";

const DonutControlsLocal = () => {
  const [glazeFlavor, setGlazeFlavor] = useState("");
  const [sprinkles, setSprinkles] = useState(false);
  const [frostingColor, setFrostingColor] = useState("");

  const handleRandom = () => {
    const { frostingColor, glazeFlavor, sprinkles } = getRandomDonut();
    setGlazeFlavor(glazeFlavor);
    setSprinkles(sprinkles);
    setFrostingColor(frostingColor);
  };
  return (
    <DonutControls
      {...{
        handleRandom,
        frostingColor,
        setFrostingColor,
        sprinkles,
        setSprinkles,
        glazeFlavor,
        setGlazeFlavor,
      }}
    />
  );
};

export default DonutControlsLocal;
