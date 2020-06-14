import React from "react";

import LocalStatePage from "../pages/LocalStatePage";
import SkeletonPage from "../pages/SkeletonPage";
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
  { display: "Reducer", path: "/reducer", component: <SkeletonPage /> },
  { display: "Context", path: "/context", component: <SkeletonPage /> },
  { display: "Redux", path: "/redux", component: <SkeletonPage /> },
  { display: "Recoil", path: "/recoil", component: <SkeletonPage /> },
];
