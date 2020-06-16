import React, { useState } from "react";
import DonutControls from "./DonutControls";

const DonutControlsLocal = () => {
  const [glazeFlavor, setGlazeFlavor] = useState("");
  const [sprinkles, setSprinkles] = useState(false);
  return (
    <DonutControls
      {...{
        sprinkles,
        setSprinkles,
        glazeFlavor,
        setGlazeFlavor,
      }}
    />
  );
};

export default DonutControlsLocal;
