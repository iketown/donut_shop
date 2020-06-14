import React from "react";

import LocalStatePage from "../pages/LocalStatePage";
import ContextPage from "../pages/ContextPage";
import ComingSoon from "../pages/ComingSoon";

export const routes: {
  display: string;
  path: string;
  component: JSX.Element;
}[] = [
  {
    display: "useState",
    path: "/localstate",
    component: <LocalStatePage />,
  },
  { display: "Reducer", path: "/reducer", component: <ComingSoon /> },
  { display: "Context", path: "/context", component: <ContextPage /> },
  { display: "Redux", path: "/redux", component: <ComingSoon /> },
  { display: "Recoil", path: "/recoil", component: <ComingSoon /> },
];
