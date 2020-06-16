import React, { useState } from "react";
import DonutControls from "./DonutControls";

const DonutControlsLocal = () => {
  const [glazeFlavor, setGlazeFlavor] = useState("");

  return (
    <DonutControls
      {...{
        glazeFlavor,
        setGlazeFlavor,
      }}
    />
  );
};

export default DonutControlsLocal;
