import React from "react";
import DonutControls from "./DonutControls";
import { useDonut } from "../../hooks/useDonut";

const DonutControlsLocal = () => {
  const donutFxns = useDonut();

  return <DonutControls {...donutFxns} />;
};

export default DonutControlsLocal;
