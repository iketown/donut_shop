import React from "react";

import LocalStatePage from "../pages/LocalStatePage";
import ComingSoon from "../pages/ComingSoon";

export const routes: {
  display: string;
  path: string;
  component: JSX.Element;
}[] = [
  {
    display: "Local State",
    path: "/localstate",
    component: <LocalStatePage />,
  },
  { display: "Reducer", path: "/reducer", component: <ComingSoon /> },
  { display: "Context", path: "/context", component: <ComingSoon /> },
  { display: "Redux", path: "/redux", component: <ComingSoon /> },
];
